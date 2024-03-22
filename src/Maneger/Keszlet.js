import Layout from "../Layout";
import React, { useState, useEffect } from "react";

export default function Keszlet() {
  const [termek, setTermek] = useState([]);
  const [selectedTermek, setSelectedTermek] = useState([]);
  const [Leiras, setLeiras] = useState([]);
  const [formData, setFormData] = useState({
    marka: "",
    elnevezes: "",
    keszlet: "",
    eladasi_ar: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/termekShow")
      .then((response) => response.json())
      .then((data) => setTermek(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleBovebbenClick = (termek) => {

    setSelectedTermek(termek);
    fetch(`http://localhost:8000/api/leiras/${termek.ter_id}`)
      .then((response) => response.json())
      .then((data) => setLeiras(data));
    document.getElementById("LeirasModal").style.display = "block";
  };
  useEffect(() => {
    if (selectedTermek) {
      setFormData({
        marka: selectedTermek.marka || "",
        elnevezes: selectedTermek.elnevezes || "",
        keszlet: selectedTermek.keszlet || "",
        eladasi_ar: selectedTermek.eladasi_ar || "",
      });
    }
  }, [selectedTermek]);
  const closeModal = () => {
    setSelectedTermek([]);
    document.getElementById("LeirasModal").style.display = "none";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8000/api/keszlet/mod/${selectedTermek.ter_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
      //console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  return (
    <div className="App">
      <Layout />
      Termék Lista
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Termék ID</th>
              <th>Márka Neve</th>
              <th>Termék Neve</th>
              <th>Leírás</th>
              <th>Mennyiség</th>
              <th>Ára</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {termek.map((termeks) => (
              <tr key={termeks.ter_id}>
                <td>{termeks.ter_id}</td>
                <td>{termeks.marka}</td>
                <td>{termeks.elnevezes}</td>
                <td>A gombon</td>
                <td>{termeks.keszlet}</td>
                <td>{termeks.eladasi_ar} Ft</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleBovebbenClick(termeks)}
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
      {selectedTermek && (
        <form onSubmit={handleSubmit}>
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
                    Termék ID: {selectedTermek.ter_id}
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Márka Neve:
                    <input
                      type="text"
                      placeholder={formData.marka}
                      onChange={handleInputChange}
                      name="marka"
                    ></input>
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Termék Neve:
                    <input
                      type="text"
                      placeholder={formData.elnevezes}
                      onChange={handleInputChange}
                      name="elnevezes"
                    ></input>
                  </p>
                  <p style={{ paddingTop: "5px" }}>
                    Mennyiség:{" "}
                    <input
                      type="text"
                      placeholder={formData.keszlet}
                      onChange={handleInputChange}
                      name="keszlet"
                    ></input>
                  </p>

                  <p style={{ paddingTop: "5px" }}>
                    Eladási ár:{" "}
                    <input
                      type="text"
                      placeholder={formData.eladasi_ar}
                      onChange={handleInputChange}
                      name="eladasi_ar"
                    ></input>{" "}
                    Ft
                  </p>
                  <div className="container border">
                    <h1>Leiras:</h1>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Érték</th>
                          <th>Mértékegység</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Leiras.map((lierass) => (
                          <tr key={lierass.ertek}>

                            <td>{lierass.ertek}</td>
                            <td>{lierass.mertekegyseg}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
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
