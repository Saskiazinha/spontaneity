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
        <button>Sign Up</button>
        {error ?? <p>{error}</p>}
      </form>
    </div>
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (password1 !== password2) {
      setError("Passwords are not matching");
    }
    setPassword1("");
    setPassword2("");
    setUsername("");
    setSignUpData({ ...signUpData, password: password1 });

    // validatePassword(signUpData.password);
  }

  // function validatePassword(password) {}

  // function validatePasswordLength(password) {
  //   if (password.length < 6) {
  //     throw new Error("Password must contain at least 6 characters");
  //     // setError(Error);
  //   }
  // }
}
