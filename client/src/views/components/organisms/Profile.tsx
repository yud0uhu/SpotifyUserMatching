import { useApi } from "../../../use-api";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = (props: any) => {
  const opts = {
    audience: "spotify-user-matching-auth",
    scope: "spotify-user-matching-admin",
  };
  const { loginWithRedirect, getAccessTokenWithPopup } = useAuth0();
  const {
    loading,
    error,
    refresh,
    data: users,
  } = useApi("http://localhost:8000/private-scoped", opts);

  console.log(users);

  if (users !== null) {
    props.setUserId(users["userId"]);
  }

  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error === "login_required") {
      return <button onClick={() => loginWithRedirect(opts)}>Login</button>;
    }
    if (error === "consent_required") {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error}</div>;
  }
  return (
    <div>
      <ul>　ようこそ、{users ? users["userName"] : "undefined"}さん</ul>
    </div>
  );
};
export default Profile;
