import Toast from 'react-native-toast-message';

export const showToastError = (message?: string) => {
  Toast.show({
    type: 'error',
    text1: message || 'Unknown Error',
    position: 'bottom',
    bottomOffset: 80,
  });
};

export const showToastSuccess = (message?: string) => {
  Toast.show({
    type: 'success',
    text1: message || 'Completed Successfully!',
    position: 'bottom',
    bottomOffset: 80,
  });
};

export const transformValueToCurrency = (value: number) => {
  const formattedValue =
    '$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  return formattedValue;
};

export const unMaskMoneyValue = (value: string) => {
  return parseFloat(value.replace(/[^0-9.]/g, ''));
};
