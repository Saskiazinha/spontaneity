import React, { useState, useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useHistory } from "react-router-dom";

export default function SignUpPage() {
  // const [signUpData, setSignUpData] = useState({ username: "", password: "" });
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
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
            // type={"password"}
            onChange={(event) => setPassword1(event.target.value)}
          />
        </label>
        <label>
          Repeat password:
          <input
            name={"password2"}
            value={password2}
            // type={"password"}
            onChange={(event) => setPassword2(event.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
        {error ?? <p>{error}</p>}
        {errorBackend === 400 && <p>User already exists</p>}
        {errorBackend === 403 && <p> Password is not valid</p>}
        {errorBackend === 403 && <p>You are signed up now. Please log in.</p>}
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    try {
      checkIfPwsMatch();
      checkPwLength();
      checkIfPwContainsNumbers();
      checkIfPwContainsSmallLetters();
      checkIfPwContainsUppercaseLetters();
      let signUpData = { username: username, password: password1 };
      // setSignUpData({ username: username, password: password1 });
      postSignUp(signUpData)
        .then(() => history.push("/login"))
        .catch((error) => setErrorBackend(error.response.status));
    } catch (e) {
      console.log(e);
    }
  }

  function clearForm() {
    setPassword1("");
    setPassword2("");
    setUsername("");
  }

  function checkIfPwsMatch() {
    if (password1 !== password2) {
      setError("Passwords are not matching");
      clearForm();
      throw new Error("Passwords are not matching");
    }
    clearForm();
  }

  function checkPwLength() {
    if (password1.length < 6) {
      setError("Password must be a minimum of 6 characters.");
      throw new Error("Password must be a minimum of 6 characters.");
    }
  }
  function checkIfPwContainsNumbers() {
    if (!/\d/.test(password1)) {
      setError("Password must contain at least one digit.");
      throw new Error("Password must contain at least one digit.");
    }
  }
  function checkIfPwContainsSmallLetters() {
    if (!/[a-z]/.test(password1)) {
      setError("Password must contain at least one lowercase letter.");
      throw new Error("Password must contain at least one lowercase letter.");
    }
  }
  function checkIfPwContainsUppercaseLetters() {
    if (!/[A-Z]/.test(password1)) {
      setError("Password must contain at least one uppercase letter.");
      throw new Error("Password must contain at least one uppercase letter.");
    }
  }
}
