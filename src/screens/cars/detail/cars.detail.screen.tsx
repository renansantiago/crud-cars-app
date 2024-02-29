import React from 'react';
import { ScrollView, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { ADD_CAR, UPDATE_CAR } from '../../../api/graphql';
import {
  AddCarButton,
  AddCarButtonContainer,
  AddCarButtonText,
  ArrowContainer,
  Container,
  ErrorText,
  FormContainer,
  Header,
  HeaderText,
  Input,
  InputMoneyContainer,
  SafeAreaViewContent,
  SubHeader,
} from './cars.detail.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { TSStackScreenProps, TStackNavigationProp } from 'navigation/navigator';
import {
  showToastError,
  showToastSuccess,
  unMaskMoneyValue,
} from '../../../util';
import InputMoney from '../../../components/input-money/input-money';
import Loading from '../../../components/loading/loading';
import theme from '../../../theme';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  model: yup.string().required('Model is required'),
  value: yup
    .string()
    .test('is-number', 'Value must be a valid number', (value) => {
      if (!value) {
        return true;
      }
      const unmaskedValue = unMaskMoneyValue(value);
      return !isNaN(unmaskedValue);
    })
    .test('is-positive', 'Value must be greater than zero', (value) => {
      if (!value) {
        return true;
      }
      const unmaskedValue = unMaskMoneyValue(value);
      return unmaskedValue > 0;
    })
    .required('Value is required'),
});

const CarsDetailScreen: React.FC<TSStackScreenProps<'CarDetail'>> = ({
  route,
}) => {
  const car = route.params?.car;
  const navigation = useNavigation<TStackNavigationProp<'CarDetail'>>();
  const [createCar, { loading: createCarLoading, error: createCarError }] =
    useMutation(ADD_CAR);
  const [updateCar, { loading: updateCarLoading, error: updateCarError }] =
    useMutation(UPDATE_CAR);

  const onSubmit = async (values: {
    name: string;
    model: string;
    value: string;
  }) => {
    try {
      const input = {
        name: values.name,
        model: values.model,
        value: unMaskMoneyValue(values.value),
      };
      if (car) {
        await updateCar({
          variables: { updateCarInput: { ...input, id: car.id } },
        });
        showToastSuccess('Car updated successfully!');
      } else {
        await createCar({ variables: { createCarInput: input } });
        showToastSuccess('Car added successfully!');
      }
      navigation.navigate('CarsList');
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'CarsList' }],
        }),
      );
    } catch (error) {
      console.log('Error:', error);
      showToastError(
        createCarError?.message || updateCarError?.message || 'Unknown Error',
      );
    }
  };

  const isLoading = createCarLoading || updateCarLoading;

  return (
    <SafeAreaViewContent edges={['right', 'left', 'bottom']}>
      <Header>
        <ArrowContainer onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={26} color='white' />
        </ArrowContainer>
        <HeaderText>{car ? 'Update Car' : 'New Car'}</HeaderText>
      </Header>
      <SubHeader />
      <ScrollView>
        <Container>
          <FormContainer>
            <Formik
              initialValues={{
                name: car ? car.name : '',
                model: car ? car.model : '',
                value: car ? car.value.toString() : '',
              }}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <Input
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values?.name}
                    placeholder='Name'
                  />
                  {touched.name && errors.name && (
                    <ErrorText>{errors.name}</ErrorText>
                  )}

                  <Input
                    onChangeText={handleChange('model')}
                    onBlur={handleBlur('model')}
                    value={values?.model}
                    placeholder='Model'
                  />
                  {touched.model && errors.model && (
                    <ErrorText>{errors.model}</ErrorText>
                  )}

                  <InputMoneyContainer>
                    <InputMoney
                      onChangeText={handleChange('value')}
                      value={values?.value}
                      placeholder='Value'
                    />
                  </InputMoneyContainer>
                  {touched.value && errors.value && (
                    <ErrorText>{errors.value}</ErrorText>
                  )}
                  <AddCarButtonContainer>
                    <AddCarButton onPress={() => handleSubmit()}>
                      <AddCarButtonText>
                        {car ? 'Update Car' : 'Add New Car'}
                      </AddCarButtonText>
                      {isLoading && (
                        <Loading size='small' color={theme.color.base.white} />
                      )}
                    </AddCarButton>
                  </AddCarButtonContainer>
                </View>
              )}
            </Formik>
          </FormContainer>
        </Container>
      </ScrollView>
    </SafeAreaViewContent>
  );
};

export default CarsDetailScreen;
