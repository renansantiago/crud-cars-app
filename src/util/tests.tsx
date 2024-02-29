import { ThemeProvider as ThemeProviderStyled } from 'styled-components/native';
import { theme } from '../theme';
import { render } from '@testing-library/react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TStackParamList } from 'navigation/navigator';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};

export const renderWithProvider = (children: React.ReactNode) =>
  render(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <ThemeProvider children={children} />
      </NavigationContainer>
    </GestureHandlerRootView>,
  );

export const navigationMock: NativeStackNavigationProp<
  TStackParamList,
  'CarDetail',
  undefined
> = {
  // Add StackActionHelpers type
  navigate: jest.fn(),
  dispatch: jest.fn(),
  reset: jest.fn(),
  goBack: jest.fn(),
  isFocused: jest.fn(),
  canGoBack: jest.fn(),
  getId: jest.fn(),
  getState: jest.fn(),
  getParent: jest.fn(),
  setParams: jest.fn(),
  setOptions: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  replace: jest.fn(), // Add replace property
  push: jest.fn(), // Add push property
  pop: jest.fn(), // Add pop property
  popToTop: jest.fn(), // Add popToTop property
};

export const routeMock = {
  name: 'CarDetail',
  params: {
    car: {
      id: '1',
      name: 'Test Car',
      model: 'Test Model',
      value: 10000,
    },
  },
} as RouteProp<TStackParamList, 'CarDetail'>;
