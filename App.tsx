import React from 'react';
import Navigator from './src/navigation/navigator';
import { ThemeProvider } from 'styled-components/native';
import Toast from 'react-native-toast-message';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './src/services/apolloClient';
import theme from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Navigator />
          <Toast />
        </ThemeProvider>
      </GestureHandlerRootView>
    </ApolloProvider>
  );
};

export default App;
