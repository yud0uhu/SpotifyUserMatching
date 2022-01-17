import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-w5l6whob.jp.auth0.com"
      clientId="MJMgiGKSWD6nomCCP213x8ScJRtPgVJ0"
      audience="spotify-user-matching-auth"
      scope="spotify-user-matching-admin"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
    ,
  </React.StrictMode>,

  document.getElementById("root")
);
