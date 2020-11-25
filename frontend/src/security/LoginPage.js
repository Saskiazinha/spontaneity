import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import LoginButton from "../commons/LoginButton";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const { postLogin } = useContext(UserContext);
  const [error, setError] = useState("");
  const history = useHistory();
  return (
    <LoginStyling>
      <h1>Spontaneity</h1>
      <FormStyling onSubmit={handleSubmit}>
        <LabelStyled>
          <input
            name="username"
            value={loginData.username}
            onChange={handleChange}
            placeholder="Username"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name="password"
            value={loginData.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </LabelStyled>
        <LoginButton type="submit">Login</LoginButton>
        {error ?? <p>{error}</p>}
        <SignUpStyling type="button" onClick={() => history.push("/signup")}>
          Sign Up
        </SignUpStyling>
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

  h1 {
    text-align: center;
  }
`;

const FormStyling = styled.form`
  display: grid;
  grid-template-rows: 50px 50px 50px 60px 50px;
  justify-items: center;
  padding: var(--size-xxxl);
  gap: var(--size-xl);
`;

const LabelStyled = styled.label`
  display: grid;
  width: 100%;

  input {
    border-radius: 7px;
    border: none;
    padding-left: 10px;
    font-size: 0.88em;
    color: var(--turquoise-grey);
  }
`;

const SignUpStyling = styled.button`
  grid-row: 5;
  width: 80px;
  border: none;
  background-color: transparent;
  color: var(--white-main);
  font-size: 1.15em;
  text-decoration-line: underline;
`;
