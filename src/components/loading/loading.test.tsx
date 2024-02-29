import React from 'react';
import Loading from './loading';
import { renderWithProvider } from '../../util/tests';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn(),
}));

describe('Loading', () => {
  it('should render an ActivityIndicatorBase component', () => {
    const { getByTestId } = renderWithProvider(<Loading />);
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator.props.size).toBe('large');
    expect(activityIndicator).toBeDefined();
  });

  it('should have the correct size and color', () => {
    const { getByTestId } = renderWithProvider(
      <Loading size='small' color='white' />,
    );
    const activityIndicator = getByTestId('activity-indicator');
    expect(activityIndicator.props.size).toBe('small');
    expect(activityIndicator.props.color).toBe('white');
  });
});
