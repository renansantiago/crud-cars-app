import { gql } from '@apollo/client';

export const GET_CARS = gql`
  query getCars {
    cars {
      id
      name
      model
      value
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation removeCar($id: String!) {
    removeCar(id: $id) {
      id
    }
  }
`;

export const ADD_CAR = gql`
  mutation createCar($createCarInput: CreateCarInput!) {
    createCar(createCarInput: $createCarInput) {
      id
      name
      model
      value
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateCar($updateCarInput: UpdateCarInput!) {
    updateCar(updateCarInput: $updateCarInput) {
      id
      name
      model
      value
    }
  }
`;
