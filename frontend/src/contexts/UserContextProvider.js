import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [userData, setUserData] = useState();

  function postLogin(loginData) {
    axios.post("/auth/login", loginData).then((response) => setToken);
  }

  const tokenIsValid = () => {
    const decoded = jwtDecode(token);
    return token && decoded.exp > new Date().getTime() / 1000;
  };

  useEffect(() => {
    if (tokenIsValid()) {
      const decoded = jwtDecode(token);
      setUserData(decoded);
      localStorage.setItem("ACCESS_TOKEN", token);
    }
  });

  return <UserContext.Provider>{children}</UserContext.Provider>;
}
