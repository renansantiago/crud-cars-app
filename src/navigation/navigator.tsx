import { NavigationContainer, RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import { CarsListScreen, CarsDetailScreen } from '../screens/index';
import { Car } from '../interfaces/cars';

export type TStackParamList = {
  CarsList: undefined;
  CarDetail: { car?: Car };
};

export type TStackRouteName = keyof TStackParamList;

export type TStackNavigationProp<RouteName extends TStackRouteName> =
  NativeStackNavigationProp<TStackParamList, RouteName>;

export type TStackRouteProp<RouteName extends TStackRouteName> = RouteProp<
  TStackParamList,
  RouteName
>;

export type TSStackScreenProps<RouteName extends TStackRouteName> =
  NativeStackScreenProps<TStackParamList, RouteName>;

const Stack = createNativeStackNavigator<TStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'CarsList'} component={CarsListScreen} />
        <Stack.Screen name={'CarDetail'} component={CarsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
