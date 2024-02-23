import Layout from "../Layout";
import useAuthContext from "../context/AuthContext";

function Public() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <div className="app">
      <Layout />
    </div>
  );
}
export default Public;
