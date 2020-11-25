import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { postLogin } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();
  return (
    <LoginStyling>
      <TitelStyling>Spontaneity</TitelStyling>
      <FormStyling onSubmit={handleSubmit}>
        <Label>
          <input
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </Label>
        <Label>
          <input
            name="password"
            value={loginData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Label>
        <LoginButton type="submit">Login</LoginButton>
        {error ?? <p>{error}</p>}
        <SignUpButton type="button" onClick={() => history.push("/signup")}>
          Sign Up
        </SignUpButton>
      </FormStyling>
    </LoginStyling>
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

const LoginStyling = styled.div`
  background-color: var(--turquoise-main);
  height: 100vh;
`;

const TitelStyling = styled.h1`
  text-align: center;
`;

const FormStyling = styled.form`
  display: grid;
  grid-template-rows: 50px 50px 50px 60px 50px;
  justify-items: center;
  padding: var(--size-xxxl);
  gap: var(--size-xl);
`;

const Label = styled.label`
  display: grid;
  width: 100%;

  input {
    border-radius: 7px;
    border: none;
    padding-left: 10px;
    font-size: 14px;
    color: #324b4f;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  font-size: 16px;
  background-color: var(--turquoise-bright);
  color: var(--turquoise-grey);
  border-radius: 7px;
  border: none;
`;

const SignUpButton = styled.button`
  grid-row: 5/5;
  width: 80px;
  border: none;
  background-color: transparent;
  color: var(--white-main);
  font-size: 18px;
  text-decoration-line: underline;
`;
