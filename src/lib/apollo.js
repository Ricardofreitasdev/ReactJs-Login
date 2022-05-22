import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-graphql-teste.herokuapp.com",
  cache: new InMemoryCache({}),
});
