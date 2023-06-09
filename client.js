import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/thirumurugan7/web3-school",
  cache: new InMemoryCache(),
});

console.log(client);

export default client;
