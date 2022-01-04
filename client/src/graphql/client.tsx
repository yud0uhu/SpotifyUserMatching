import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

// GraphQL
export default new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8000/graphql",
  }),
});
