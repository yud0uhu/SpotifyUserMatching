import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = (props: any) => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <button
      variant="outline-primary"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
      {...props}
    >
      Log out
    </button>
  ) : null;
};

export default LogoutButton;
