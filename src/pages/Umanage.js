import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "../api/axios";

const Umanage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/users");
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    getUsers();
    console.log(users);
  }, []);

  function getPermission(permId){
      let permission = "";
      if(permId == 0){
            permission = "Admin";
      }else if(permId == 1){
            permission = "Manager";
      }else{
            permission = "Vásárló";
      }
      return permission;
  }


  return (
    <div className="App">
      <Layout />
      <div className="table-container">
        <table class="table table-hover">
          <thead class="table-dark">
            <tr>
              <th scope="col">Felhasználó név</th>
              <th scope="col">E-mail</th>
              <th scope="col">Last Login</th>
              <th scope="col">Permission</th>
              <th scope="col">#</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.lastLogin}</td>
                <td>{getPermission(user.permission)}</td>
                <td><button>Módosítás</button></td>
                <td><button>Törlés</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Umanage;
