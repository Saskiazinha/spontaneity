import React, { useState, useEffect } from "react";
import UserContext from "./UserContext";
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
  loadTokenFromLocalStorage,
  loadUserDataFromLocalStorage,
  saveTokenToLocalStorage,
  saveUserDataToLocalStorage,
  deleteTokenFromLocalStorage,
  deleteUserDataFromLocalStorage,
} from "../service/LocalStorage";

export default function UserContextProvider({ children }) {
  const [token, setToken] = useState(loadTokenFromLocalStorage());
  const [userData, setUserData] = useState(loadUserDataFromLocalStorage());

  function postLogin(loginData) {
    return axios
      .post("/auth/login", loginData)
      .then((response) => setToken(response.data));
  }

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp > new Date().getTime() / 1000) {
          setUserData(decoded);
          saveTokenToLocalStorage(token);
          saveUserDataToLocalStorage(decoded);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [token]);

  const tokenIsValid = () =>
    token && userData?.exp > new Date().getTime() / 1000;

  function postSignUp(signUpData) {
    console.log(signUpData);
    return axios
      .post("/auth/signup", signUpData)
      .then((response) => response.data);
  }

  function logout() {
    deleteTokenFromLocalStorage();
    deleteUserDataFromLocalStorage();
  }

  return (
    <UserContext.Provider
      value={{
        token,
        tokenIsValid,
        postLogin,
        userData,
        postSignUp,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
