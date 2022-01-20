import { useApi } from "../../use-api";
import { useAuth0 } from "@auth0/auth0-react";
import NamePlate from "../atoms/NamePlate";

const Profile = (props) => {
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
  } = useApi(
    "http://http://ec2-54-82-215-43.compute-1.amazonaws.com/api/private-scoped",
    opts
  );

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
    <ul>
      <NamePlate userId={users ? users["userName"] : undefined} />
    </ul>
  );
};
export default Profile;
