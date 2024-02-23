import { useEffect } from "react";
import useAuthContext from "../context/AuthContext";
import Layout from "../Layout";

const Admin = () => {
  const { user, getUser } = useAuthContext();
  
  
  return (
    <div className="App">
      <Layout />
      <div>{user?.email}</div>
    </div>
  );
};
export default Admin;
