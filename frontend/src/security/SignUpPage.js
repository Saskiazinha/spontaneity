import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import LoginButton from "../buttons/LoginButton";

const initialState = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState(initialState);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorFrontend, setErrorFrontend] = useState("");
  const [errorBackend, setErrorBackend] = useState(0);
  const { postSignUp } = useContext(UserContext);
  const history = useHistory();

  return (
    <SignUpStyling>
      <h1>Spontaneity</h1>
      <FormStyling onSubmit={handleSubmit}>
        <LabelStyled>
          <input
            name={"username"}
            value={signUpData.username}
            onChange={handleChange}
            placeholder="Set username"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name={"email"}
            value={signUpData.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name={"firstName"}
            value={signUpData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name={"lastName"}
            value={signUpData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name={"password1"}
            value={password1}
            type={"password"}
            onChange={(event) => {
              setPassword1(event.target.value);
            }}
            placeholder="Set password"
          />
        </LabelStyled>
        <LabelStyled>
          <input
            name={"password2"}
            value={password2}
            type={"password"}
            onChange={(event) => setPassword2(event.target.value)}
            placeholder="Repeat password"
          />
        </LabelStyled>
        <LoginButton type="submit">Sign Up</LoginButton>
        <ErrorStyling>
          {errorFrontend ?? <p>{errorFrontend}</p>}
          {errorBackend === 400 && <p>Username already exists</p>}
          {errorBackend === 403 && <p> Password is not valid</p>}
        </ErrorStyling>
        <TextStyled>
          <h4>Please note:</h4>
          <p>
            Your password must be a minimum of <strong>6 characters</strong> and
            contain <strong>lowercase and uppercase letters</strong>, as well as
            <strong> numbers</strong>.
          </p>
        </TextStyled>
      </FormStyling>
    </SignUpStyling>
  );

  function handleChange(event) {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    try {
      checkIfPasswordMatch();
      validatePassword();
      setSignUpData({ ...signUpData, password: password1 });

      postSignUp(signUpData)
        .then(() => history.push("/login"))
        .catch((error) => setErrorBackend(error.response.status));
    } catch (e) {
      setErrorFrontend(e.message);
      clearPasswords();
    }
  }

  function clearPasswords() {
    setPassword1("");
    setPassword2("");
  }

  function checkIfPasswordMatch() {
    if (password1 !== password2) {
      throw new Error("Passwords are not matching!");
    }
  }

  function validatePassword() {
    checkPasswordLength();
    checkIfPasswordContainsNumbers();
    checkIfPasswordContainsSmallLetters();
    checkIfPasswordContainsUppercaseLetters();
  }

  function checkPasswordLength() {
    if (password1.length < 6) {
      throw new Error("Password must be a minimum of 6 characters!");
    }
  }
  function checkIfPasswordContainsNumbers() {
    if (!/\d/.test(password1)) {
      throw new Error("Password must contain at least one digit!");
    }
  }
  function checkIfPasswordContainsSmallLetters() {
    if (!/[a-z]/.test(password1)) {
      throw new Error("Password must contain at least one lowercase letter!");
    }
  }
  function checkIfPasswordContainsUppercaseLetters() {
    if (!/[A-Z]/.test(password1)) {
      throw new Error("Password must contain at least one uppercase letter!");
    }
  }
}

const SignUpStyling = styled.div`
  background-color: var(--turquoise-main);
  height: 100vh;

  h1 {
    text-align: center;
  }
`;

const FormStyling = styled.form`
  display: grid;
  grid-template-rows: repeat(7, 30px) 1fr;
  justify-items: center;
  padding: var(--size-l) var(--size-xxxl);
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

const TextStyled = styled.div`
  font-size: 0.8em;
  letter-spacing: 1px;
  margin-top: -20px;
`;

const ErrorStyling = styled.div`
  font-size: 0.85em;
  letter-spacing: 1px;
  text-align: center;
`;
