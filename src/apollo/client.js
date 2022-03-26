import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const client = new ApolloClient({
  uri: process.env.WORDPRESS_API_URL,
  cache: new InMemoryCache()
});