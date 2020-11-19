import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { postLogin } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          value={loginData.password}
          onChange={handleChange}
          type="password"
        />
      </label>
      <button>Login</button>
      {error ?? <p>{error}</p>}
    </form>
  );
  function handleChange(event) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    postLogin(loginData)
      .then(() => history.push("/home"))
      .catch(() => setError("Unknown username or password."));
  }
}
