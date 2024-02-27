import useAuthContext from "../context/AuthContext";

function LogoutForm() {
  const { logout } = useAuthContext();
  const { user } = useAuthContext();
  const handleLogout = async () => {
    logout();
  };

  /* if(user != null){ */
    return <button className="nav-link" onClick={handleLogout}>Logout</button>;
  /* }else{
    return;
  } */
  
}
export default LogoutForm;
