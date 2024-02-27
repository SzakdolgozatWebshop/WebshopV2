import { useEffect, useState } from "react";
import Layout from "../Layout";
import useAuthContext from "../context/AuthContext";

export default function Profil() {
  const { user, getUser } = useAuthContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);
  let perm = "";
  if (user?.permission == 0) {
    perm = "Admin";
  } else if (user?.permission == 1) {
    perm = "Manager";
  } else {
    perm = "User";
  }
  const handleChangePass = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Layout />
      <h1>Profil</h1>
      <div className="container " style={{ paddingTop: "60px" }}>
        <h1>{user?.name}</h1>
        <p className="title">Jogosultság: {perm}</p>
        <p className="title">Email: {user?.email}</p>
        <button onClick={JelszoModal} className="modal-header mt-4  ">
          Jelszó Módosítása
        </button>
        <div
          style={{
            marginLeft: "45%",
          }}
        ></div>
      </div>
      <form className="jelszoMod" onSubmit={handleChangePass} method="post">
        <div id="jelszoModal" className="modal mt-3">
          <div className="modal-dialog "></div>
          <div className="modal-content ">
            <div className="modal-header">
              <h4 className="modal-title ">Jelszó modositása</h4>
            </div>
            <div className="modal-body">
              <p style={{ paddingTop: "5px" }}>Jelszó régi jelszó</p>
              <input
                type="email"
                placeholder="email"
                name="regjelszo"
              ></input>
              <p style={{ paddingTop: "5px" }}>Jelszó modositása</p>
              <input
                type="password"
                placeholder="Új jelszó"
                name="ujelszo"
              ></input>
              <p style={{ paddingTop: "2px" }}></p>
              <input
                type="password"
                placeholder="Új jelszó újra"
                name="ujelszo"
              ></input>
              <p style={{ paddingTop: "10px" }}>
                <button type="submit" className="btn btn-danger">
                  Küldés
                </button>
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={JelszoBezar}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
  function JelszoModal() {
    document.getElementById("jelszoModal").style.display = "block";
  }
  function JelszoBezar() {
    document.getElementById("jelszoModal").style.display = "none";
  }
}
