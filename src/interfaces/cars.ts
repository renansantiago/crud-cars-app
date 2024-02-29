export interface Car {
  id: string;
  name: string;
  model: string;
  value: number;
}

export interface GetCarsInput {
  cars: Car[];
}

export interface RemoveCarInput {
  id: string;
}

export interface RemoveCarResult {
  removeCar: {
    id: string;
  };
}
