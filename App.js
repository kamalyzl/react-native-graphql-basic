import React from 'react';
import {HttpLink} from 'apollo-link-http';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import Navigation from './src/navigation/Navigation';

const link = new HttpLink({
  uri: 'https://api.graphql.jobs/',
  // uri: 'https://graphql.org/swapi-graphql',
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link,
  cache,
});

export const App = () => (
  <ApolloProvider client={client}>
    <Navigation />
  </ApolloProvider>
);
