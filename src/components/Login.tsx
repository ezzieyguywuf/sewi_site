import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import "./Login.css";


function Login() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          {/*
            // @ts-ignore */}
          <h1>Hello {user.attributes.email}. You are in group {user.signInUserSession.accessToken.payload["cognito:groups"]}</h1>
          {console.log(`${JSON.stringify(user, null, 2)}`)}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default Login;
