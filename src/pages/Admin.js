import useAuthContext from "../context/AuthContext";
import Layout from "../Layout";

const Admin = () => {
  const { user } = useAuthContext();
  
  
  return (
    <div className="App">
      <Layout />
      <div>{user?.email}</div>
    </div>
  );
};
export default Admin; 