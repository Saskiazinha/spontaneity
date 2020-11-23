import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errorFrontend, setErrorFrontend] = useState("");
  const [errorBackend, setErrorBackend] = useState(0);
  const { postSignUp } = useContext(UserContext);
  const history = useHistory();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Set username:
          <input
            name={"username"}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Set password:
          <input
            name={"password1"}
            value={password1}
            type={"password"}
            onChange={(event) => setPassword1(event.target.value)}
          />
        </label>
        <label>
          Repeat password:
          <input
            name={"password2"}
            value={password2}
            type={"password"}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
        {errorFrontend ?? <p>{errorFrontend}</p>}
        {errorBackend === 400 && <p>Username already exists</p>}
        {errorBackend === 403 && <p> Password is not valid</p>}
        <p>
          Please note that your password must be a minimum of 6 characters and
          contain lowercase and uppercase letters, as well as numbers.
        </p>
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    try {
      checkIfPasswordMatch();
      validatePassword();
      let signUpData = { username: username, password: password1 };

      postSignUp(signUpData)
        .then(() => history.push("/login"))
        .catch((error) => setErrorBackend(error.response.status));
    } catch (e) {
      setErrorFrontend(e.message);
    }
  }

  function clearForm() {
    setPassword1("");
    setPassword2("");
    setUsername("");
  }

  function checkIfPasswordMatch() {
    if (password1 !== password2) {
      clearForm();
      throw new Error("Passwords are not matching");
    }
    clearForm();
  }

  function validatePassword() {
    checkPasswordLength();
    checkIfPasswordContainsNumbers();
    checkIfPasswordContainsSmallLetters();
    checkIfPasswordContainsUppercaseLetters();
  }

  function checkPasswordLength() {
    if (password1.length < 6) {
      throw new Error("Password must be a minimum of 6 characters.");
    }
  }
  function checkIfPasswordContainsNumbers() {
    if (!/\d/.test(password1)) {
      throw new Error("Password must contain at least one digit.");
    }
  }
  function checkIfPasswordContainsSmallLetters() {
    if (!/[a-z]/.test(password1)) {
      throw new Error("Password must contain at least one lowercase letter.");
    }
  }
  function checkIfPasswordContainsUppercaseLetters() {
    if (!/[A-Z]/.test(password1)) {
      throw new Error("Password must contain at least one uppercase letter.");
    }
  }
}
