import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InputMoney from './input-money';

describe('InputMoney', () => {
  it('should render correctly', () => {
    const { getByPlaceholderText } = render(
      <InputMoney
        value=''
        onChangeText={() => {}}
        placeholder='Enter amount'
      />,
    );

    const inputElement = getByPlaceholderText('Enter amount');
    expect(inputElement).toBeTruthy();
  });

  it('should call onChangeText when input value changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <InputMoney
        value=''
        onChangeText={onChangeText}
        placeholder='Enter amount'
      />,
    );

    const inputElement = getByPlaceholderText('Enter amount');
    fireEvent.changeText(inputElement, '100');
    expect(onChangeText).toHaveBeenCalledWith('$ 1.00', undefined);
  });

  it('should call onBlur when input loses focus', () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <InputMoney
        value=''
        onChangeText={() => {}}
        onBlur={onBlur}
        placeholder='Enter amount'
      />,
    );

    const inputElement = getByPlaceholderText('Enter amount');
    fireEvent(inputElement, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
