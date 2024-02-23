import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/AuthContext";

function GuestLayout() {
  const { user } = useAuthContext();
  return !user ? <Outlet /> : <Navigate to="/" />;
}export default GuestLayout;
