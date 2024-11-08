import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { setHeaderToken } from "../services/api";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  // User State, Mount Request & Variables
  const [user, setUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  // Register & Login Function
  const loginSaveUser = async (data) => {
    const { token } = data;
    localStorage.setItem("token", token);
    setUser(jwtDecode(token));
    setHeaderToken();
  };

  // Get Current User Function
  // function getCurrentUser() {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const savedUser = jwtDecode(token);
  //     return savedUser;
  //   } catch (error) {
  //     return null;
  //   }
  // }

  function getCurrentUser() {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const savedUser = jwtDecode(token); // Only decode if the token exists
        return savedUser;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
    return null; // Return null if decoding fails or token is absent
  }

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setHeaderToken();
    navigate("/login");
  };

  const value = { user, getCurrentUser, loginSaveUser, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
