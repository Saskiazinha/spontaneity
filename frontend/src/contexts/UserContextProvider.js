import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [userData, setUserData] = useState();

  function postLogin(loginData) {
    axios
      .post("/auth/login", loginData)
      .then((response) => setToken(response.data));
  }

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp > new Date().getTime() / 1000) {
          setUserData(decoded);
          localStorage.setItem("ACCESS_TOKEN", token);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  const tokenIsValid = () => {
    return token && userData?.exp > new Date().getTime() / 1000;
  };

  return (
    <UserContext.Provider value={{ token, tokenIsValid, postLogin, userData }}>
      {children}
    </UserContext.Provider>
  );
}
