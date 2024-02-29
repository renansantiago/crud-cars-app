import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import CarsDetailScreen from './cars.detail.screen';
import {
  navigationMock,
  renderWithProvider,
  routeMock,
} from '../../../util/tests';
import { MockedProvider } from '@apollo/client/testing';
import { createUpdateCar } from '../../../util/mocks';
import { ADD_CAR, UPDATE_CAR } from '../../../api/graphql';

describe('CarsDetailScreen', () => {
  const createCarMock = {
    request: {
      query: ADD_CAR,
      variables: { createUpdateCar },
    },
    result: {
      data: {
        createUpdateCar,
      },
    },
  };

  const updateCarMock = {
    request: {
      query: UPDATE_CAR,
      variables: { createUpdateCar },
    },
    result: {
      data: {
        createUpdateCar,
      },
    },
  };

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = renderWithProvider(
      <MockedProvider mocks={[createCarMock, updateCarMock]}>
        <CarsDetailScreen
          navigation={{
            ...navigationMock,
          }}
          route={routeMock}
        />
        ,
      </MockedProvider>,
    );

    // Assert that the necessary elements are rendered
    waitFor(() => {
      expect(getByPlaceholderText('Name')).toBeTruthy();
      expect(getByPlaceholderText('Model')).toBeTruthy();
      expect(getByPlaceholderText('Value')).toBeTruthy();
      expect(getByText('Add New Car')).toBeTruthy();
    });
  });

  it('handles form submission correctly', () => {
    const { getByPlaceholderText, getByText } = renderWithProvider(
      <MockedProvider mocks={[createCarMock, updateCarMock]}>
        <CarsDetailScreen
          navigation={{
            ...navigationMock,
          }}
          route={routeMock}
        />
        ,
      </MockedProvider>,
    );

    // Fill in the form fields
    waitFor(() => {
      fireEvent.changeText(getByPlaceholderText('Name'), 'Test Car');
      fireEvent.changeText(getByPlaceholderText('Model'), 'Test Model');
      fireEvent.changeText(getByPlaceholderText('Value'), '10000');

      // Submit the form
      fireEvent.press(getByText('Add New Car'));

      // Assert that the form submission is handled correctly
      // (You can add more assertions based on your specific requirements)
      expect(getByText('Car added successfully!')).toBeTruthy();
    });
  });
});
