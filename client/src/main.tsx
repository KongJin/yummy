import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./Components/App";
import Apollo from "./Components/Apollo";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <ApolloProvider client={Apollo}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ApolloProvider>,

  document.getElementById("root")
);
