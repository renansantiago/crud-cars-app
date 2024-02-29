import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Platform } from 'react-native';

const localhost = Platform.OS === 'ios' ? 'localhost' : '192.168.0.125'; // Your local IP Address

const client = new ApolloClient({
  uri: `http://${localhost}:3000/graphql`,
  cache: new InMemoryCache(),
});

export default client;
