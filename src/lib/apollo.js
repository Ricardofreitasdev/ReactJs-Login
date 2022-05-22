import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-node-graphql.herokuapp.com/",
  cache: new InMemoryCache({}),
});
