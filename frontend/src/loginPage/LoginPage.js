import React, { useState } from "react";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  return (
    <>
      {/*Placeholder Header Component*/}
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
      </form>
    </>
  );
  function handleChange(event) {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
}
