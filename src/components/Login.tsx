import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "./Login.css";
import CatalogEditor from './CatalogEditor';


// @ts-ignore
function Login({ signOut, user }) {
  const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
  const isAdmin = groups ? groups.includes("admin") : false;
  return (
    <>
      <h1>Hello {user.attributes.email}.</h1>
      {isAdmin && <CatalogEditor />}
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(Login);
