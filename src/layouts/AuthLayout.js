import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/AuthContext";

function AuthLayout() {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to="/login" />;
}export default AuthLayout;
