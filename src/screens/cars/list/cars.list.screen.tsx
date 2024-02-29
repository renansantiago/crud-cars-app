import { useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  LayoutAnimation,
  RefreshControl,
} from 'react-native';
import {
  AddCarButton,
  AddCarButtonContainer,
  ArrowContainer,
  CarDetails,
  CarItemText,
  CarName,
  CardContainer,
  CardContent,
  Container,
  DeleteButton,
  EmptyButton,
  EmptyButtonText,
  EmptyText,
  Header,
  HeaderText,
  SafeAreaViewContent,
  SubHeader,
} from './cars.list.styles';
import { useLazyQuery, useMutation } from '@apollo/client';
import { Swipeable } from 'react-native-gesture-handler';
import { GET_CARS, REMOVE_CAR } from '../../../api/graphql';
import {
  showToastError,
  showToastSuccess,
  transformValueToCurrency,
} from '../../../util';
import {
  Car,
  GetCarsInput,
  RemoveCarInput,
  RemoveCarResult,
} from '../../../interfaces/cars';
import { useNavigation } from '@react-navigation/native';
import { TStackNavigationProp } from '../../../navigation/navigator';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface CarItemProps {
  car: Car;
  onDelete: (id: string) => void;
}

const CarItem: React.FC<CarItemProps> = ({ car, onDelete }) => {
  const [opacity] = useState(new Animated.Value(1));

  const handleDelete = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onDelete(car.id));
  };

  const renderRightActions = () => (
    <DeleteButton testID='delete-button' onPress={handleDelete}>
      <CarItemText>Delete</CarItemText>
    </DeleteButton>
  );
  const navigation = useNavigation<TStackNavigationProp<'CarsList'>>();

  return (
    <Swipeable testID='car-item' renderRightActions={renderRightActions}>
      <CardContainer
        onPress={() => {
          navigation.navigate('CarDetail', { car });
        }}
      >
        <CardContent>
          <CarName>{car.name}</CarName>
          <CarDetails>{car.model}</CarDetails>
          <CarDetails>{transformValueToCurrency(car.value)}</CarDetails>
        </CardContent>
        <ArrowContainer>
          <AntDesign name='right' size={26} color='black' />
        </ArrowContainer>
      </CardContainer>
    </Swipeable>
  );
};

const CarsListScreen = () => {
  const navigation = useNavigation<TStackNavigationProp<'CarsList'>>();
  const [refreshing, setRefreshing] = useState(false);
  const [cars, setCars] = useState<Car[]>([]);

  const [getCars, { loading }] = useLazyQuery<GetCarsInput>(GET_CARS, {
    onCompleted: (data) => {
      const carsSorted = data.cars.sort((one, two) => (one <= two ? -1 : 1));
      setCars(carsSorted);
      refreshing && setRefreshing(false);
    },
    onError: (error) => {
      showToastError(error?.message || 'Unknown Error');
      refreshing && setRefreshing(false);
    },
    fetchPolicy: 'no-cache',
  });

  const [removeCar, { loading: loadingRemove }] = useMutation<
    RemoveCarResult,
    RemoveCarInput
  >(REMOVE_CAR, {
    onCompleted: (data) => {
      handleDelete(data.removeCar.id);
      showToastSuccess('Car removed successfully!');
    },
    onError: (error) => {
      showToastError(error?.message || 'Unknown Error');
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    getCars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id: string) => {
    const newCars = cars.filter((car) => car.id !== id);
    setCars(newCars);
  };

  const onRefresh = () => {
    setRefreshing(true);
    getCars();
  };

  const isLoading = loading || loadingRemove || refreshing;

  return (
    <SafeAreaViewContent edges={['right', 'left', 'bottom']}>
      <Header>
        <HeaderText>Cars</HeaderText>
      </Header>
      <SubHeader />
      <Container>
        {!isLoading && cars.length === 0 ? (
          <>
            <EmptyText>No cars available</EmptyText>
            <EmptyButton onPress={onRefresh}>
              <EmptyButtonText>Fetch Cars</EmptyButtonText>
            </EmptyButton>
          </>
        ) : (
          <>
            <FlatList
              data={cars}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <CarItem
                  car={item}
                  onDelete={(id: string) => removeCar({ variables: { id } })}
                />
              )}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing || loading}
                  onRefresh={onRefresh}
                />
              }
            />
          </>
        )}
      </Container>
      <AddCarButtonContainer>
        <AddCarButton
          onPress={() => navigation.navigate('CarDetail', { car: undefined })}
        >
          <EmptyButtonText>Add New Car</EmptyButtonText>
        </AddCarButton>
      </AddCarButtonContainer>
    </SafeAreaViewContent>
  );
};

export default CarsListScreen;
