import React, { useState, SyntheticEvent } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  function generateErrorText() {
    if (email === "" && password !== "") {
      return "Please enter an email address";
    } else if (email !== "" && password === "") {
      return "Please enter a password";
    } else if (email === "" && password === "") {
      return "Please enter a username and a password";
    } else {
      // return `email: ${email}, password: ${password}`;
    }
  }

  return (
    <form onSubmit={handleSubmit} className="login">
      <input type="text" className="login-item"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
      />
      <input type="password" className="login-item"
        autoFocus
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input type="submit" value="Login" className="login-item login-form-submit" />
      <div className="login-item login-error">
        {generateErrorText()}
      </div>
    </form>
  );
}

export default Login;
