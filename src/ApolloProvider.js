import React from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";

import App from "./App";

const httpLink = createHttpLink({
  uri: "http://localhost:5000"
});

const authLink = setContext(() => {
  const jwtToken = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: jwtToken ? `Bearer ${jwtToken}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
