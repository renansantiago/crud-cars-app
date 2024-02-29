import React from 'react';
import { waitFor } from '@testing-library/react-native';
import CarsListScreen from './cars.list.screen';
import { renderWithProvider } from '../../../util/tests';
import { GET_CARS } from '../../../api/graphql';
import { cars } from '../../../util/mocks';
import { MockedProvider } from '@apollo/client/testing';

describe('CarsListScreen', () => {
  const getCarsMock = {
    request: {
      query: GET_CARS,
    },
    result: {
      data: {
        cars,
      },
    },
  };

  it('should render the list of cars', () => {
    const { getByText } = renderWithProvider(
      <MockedProvider mocks={[getCarsMock]}>
        <CarsListScreen />
      </MockedProvider>,
    );

    waitFor(() => {
      // Assert that the header is rendered
      expect(getByText('Cars')).toBeTruthy();

      // Assert that the "Fetch Cars" button is rendered
      expect(getByText('Fetch Cars')).toBeTruthy();
    });
  });

  //TODO - CRATE TESTS FOR REMOVE CAR
});
