import { ApolloClient, InMemoryCache } from "@apollo/client";

import { createUploadLink } from "apollo-upload-client";

const getToken: any = localStorage.getItem("recoil-persist");
const token = JSON.parse(getToken).token;

const uploadLink = createUploadLink({
  uri: "http://localhost:4000/graphql",
  credentials: "same-origin",
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink as any,
});
export default client;
