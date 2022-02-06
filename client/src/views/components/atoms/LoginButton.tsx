import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  // Auth0のSSOエンドポイントからログインした後に、自身のアプリケーションにリダイレクト
  return !isAuthenticated ? (
    <button onClick={loginWithRedirect}>Log In</button>
  ) : null;
};

export default LoginButton;
