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

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" className="login-form-field" placeholder="Username" />
        <input type="password" name="password" className="login-form-field" placeholder="Password" />
        <input type="submit" value="Login" className="login-form-submit" />
      </form>
    </div>
  );
}

export default Login;
