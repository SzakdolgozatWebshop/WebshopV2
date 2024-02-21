import axios from "../api/axios.js";
import { async } from "q";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //const csrf = () => axios.get("http://localhost:8000/sanctum/csrf-cookie");

  const getUser = async () => {
    const { data } = await axios.get("http://localhost:8000/api/user");
    setUser(data);
  };

  const login = async ({ ...data }) => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      console.log("asadsdas-14");
      await axios.post("http://localhost:8000/login", data);
      console.log("asadsdas0");
      getUser();
      console.log("asadsdas");
      navigate("/admin");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("/logout");
      navigate("/");
    } catch (error) {
      console.log("Logout failed: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default function useAuthContext() {
  return useContext(AuthContext);
}
