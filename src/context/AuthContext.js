  import axios from "../api/axios.js";
  import { async } from "q";
  import { createContext, useContext, useEffect, useState } from "react";
  import { useNavigate } from "react-router";

  const AuthContext = createContext({});

  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }, []);

    const csrf = () => axios.get("http://localhost:8001/sanctum/csrf-cookie");

    const getUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:8001/api/user");
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    const login = async ({ ...data }) => {
      await csrf();
      try {
        await axios.post("http://localhost:8001/api/login", data);
        await getUser();
        navigate("/dashboard");
      } catch (error) {
        setError(error);
        console.error("Login failed:", error);
      }
    };

    const logout = async () => {
      try {
        await axios.post("/logout");
        setUser(null);
        localStorage.removeItem("user");
        navigate("/");
      } catch (error) {
        console.log("Logout failed: ", error);
      }
    };

    const register = async ({ ...data }) => {
      try {
        await axios.post("http://localhost:8001/register", data);
        console.log("Registration successful.");
        // Handle successful registration (e.g., redirect to dashboard)
        navigate("/succreg");
      } catch (error) {
        if (error.response) {
          console.error(
            "Registration request failed with validation errors:",
            error.response.data
          );
          // Handle validation errors (e.g., display error messages to the user)
        } else {
          console.error("Registration request failed:", error.message);
          // Handle other types of errors (e.g., network errors)
        }
      }
    };

    return (
      <AuthContext.Provider value={{ user, login, logout, getUser, register, error }}>
        {children}
      </AuthContext.Provider>
    );
  };
  export default function useAuthContext() {
    return useContext(AuthContext);
  }
