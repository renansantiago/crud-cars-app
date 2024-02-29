import { transformValueToCurrency, unMaskMoneyValue } from './index';

describe('transformValueToCurrency', () => {
  it('should format the value to currency', () => {
    const value = 1234.56;
    const formattedValue = transformValueToCurrency(value);

    expect(formattedValue).toBe('$ 1,234.56');
  });
});

describe('unMaskMoneyValue', () => {
  it('should remove non-digit characters and convert comma to dot', () => {
    const value = '$ 1,234.56';
    const unmaskedValue = unMaskMoneyValue(value);

    expect(unmaskedValue).toBe(1234.56);
  });
});
