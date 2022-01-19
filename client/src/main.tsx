import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={import.meta.env.REACT_APP_AUTH0_CLIENT_ID!}
      audience={import.meta.env.REACT_APP_AUTH0_AUDIENCE!}
      scope={import.meta.env.REACT_APP_AUTH0_SCOPE!}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,

  document.getElementById("root")
);
