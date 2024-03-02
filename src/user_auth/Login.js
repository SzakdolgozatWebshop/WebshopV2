import React, { useState } from "react";
import useAuthContext from "../context/AuthContext";
import Layout from "../Layout";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const { user } = useAuthContext();
  const { error } = useAuthContext();
  const handleLogin = async (e) => {
    e.preventDefault();
    login({ email, password });
  };
  let err = "";
  console.log(error);
  if(error.message == "Request failed with status code 422"){
    err = "Helytelen email cím vagy jelszó!"
  }
  return (
    <div className="App">
      <Layout />
      <div className="container bg-primary rounded-3" >
      
      <form onSubmit={handleLogin}>
        <div className="form-group ">
        <h1 className="text-center">Bejelenetkezés</h1>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <p style={{color: "red"}}>{err}</p>
        </div>
        <button type="submit" className="btn  btn-success">
          Login
        </button>
        
      </form>
      </div>
    </div>
  );
}
export default LoginForm;
