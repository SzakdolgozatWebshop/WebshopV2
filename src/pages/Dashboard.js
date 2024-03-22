import { useEffect } from "react";
import Layout from "../Layout";
import useAuthContext from "../context/AuthContext";

function Dashboard() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  return (
    <div className="app">
      <Layout />
      <h1>Dashboard</h1>
      <h1>{user?.name}</h1>
    </div>
  );
}
export default Dashboard;
