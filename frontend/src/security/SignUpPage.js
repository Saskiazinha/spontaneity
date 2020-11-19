import React, { useState } from "react";

export default function SignUpPage() {
  const [signUpData, setSignUpData] = useState({ username: "", password: "" });
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

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
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    try {
      checkIfPwsMatch();
      checkPwLength();
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
    setSignUpData({ username: username, password: password1 });
    console.log(signUpData.password);
  }

  function checkPwLength() {
    if (signUpData.password.length < 6) {
      setError("Password must be a minimum of 6 characters");
      clearForm();
      throw new Error("Password must be a minimum of 6 characters");
    }
    clearForm();
  }
}
