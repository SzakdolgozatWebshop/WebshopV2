import Layout from "../Layout";
import React, { useState, useEffect } from "react";

export default function Rendelesek() {
  const [Rendeles, setRendeles] = useState([]);
  const [selectedRendeles, setSelectedRendeles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/api/rendeleShow")
      .then((response) => response.json())
      .then((data) => setRendeles(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleBovebbenClick = (Rendeles) => {
    setSelectedRendeles(Rendeles);
    document.getElementById("LeirasModal").style.display = "block";
  };

  const closeModal = () => {
    setSelectedRendeles([]);
    document.getElementById("LeirasModal").style.display = "none";
  };
  console.log(Rendeles);
  return (
    <div className="App">
      <Layout />
      Termék Lista
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Termék ID</th>
              <th>Rendelés dátuma</th>
              <th>Vásárló</th>
              <th>Csomag</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Rendeles.map((Rendeless) => (
              <tr key={Rendeless.rend_szam}>
                <td>{Rendeless.rend_szam}</td>
                <td>{Rendeless.kelt}</td>
                <td>{Rendeless.vasarlo}</td>
                <td>{Rendeless.csomag}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleBovebbenClick(Rendeless)}
                    className="btn btn-danger"
                  >
                    Bővebben
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedRendeles && (
        <form action="">
          <div
            id="LeirasModal"
            className="modal bg-secondary p-3 text-dark bg-opacity-75"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Termék módosítás</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p style={{ paddingTop: "5px" }}>
                    Termék ID: {selectedRendeles.rend_szam}
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                  Rendelés dátuma: {selectedRendeles.kelt};
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Termék Neve:
                    <input
                      type="text"
                      placeholder={selectedRendeles.elnevezes}
                      name="elnevezes"
                    ></input>
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Mennyiség:{" "}
                    <input
                      type="text"
                      placeholder={selectedRendeles.keszlet}
                      name="keszlet"
                    ></input>
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Eladási ár:{" "}
                    <input
                      type="text"
                      placeholder={selectedRendeles.eladasi_ar}
                      name="keszlet"
                    ></input>{" "}
                    Ft
                  </p>
                  <div className="modal-footer">
                    <p style={{ paddingTop: "10px" }}>
                      <button type="submit" className="btn btn-danger">
                        Küldés
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
