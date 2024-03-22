import Layout from "../Layout";
import React, { useState, useEffect } from "react";

export default function Rendelesek() {
  const [Rendeles, setRendeles] = useState([]);
  const [selectedRendeles, setSelectedRendeles] = useState([]);
  const [tabla, setTabla] = useState([]);
  const [leiras, setLeiras] = useState([]);
  const firstHalf = leiras.slice(0, Math.ceil(leiras.length / 2));

  useEffect(() => {
    fetch("http://localhost:8000/api/rendeleShow")
      .then((response) => response.json())
      .then((data) => setRendeles(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);
  const handleBovebbenClick = (Rendeles) => {
    fetch(`http://localhost:8000/api/rendtabla/${Rendeles.rend_szam}`)
      .then((response) => response.json())
      .then((data) => {
        setTabla(data);

        const termekFetches = data.map((item) => {
          return fetch(
            `http://localhost:8000/api/rendtablaleiras/${item.Termek}`
          ).then((response) => response.json());
        });

        Promise.all(termekFetches)
          .then((leirasDataArray) => {
            // Összegyűjtjük az összes leírásadatot egy tömbbe
            const allLeirasData = leirasDataArray.flat(); // Ha a leírások tömbjei tömbökben vannak
            // Itt használjuk a korábbi leírásadatokat és a most lekért adatokat együtt
            setLeiras(allLeirasData);
          })
          .catch((error) => console.error("Error fetching leiras:", error));
      })
      .catch((error) => console.error("Error fetching tabla:", error));

    setSelectedRendeles(Rendeles);
    document.getElementById("LeirasModal").style.display = "block";

  };

  const closeModal = () => {
    setSelectedRendeles([]);
    document.getElementById("LeirasModal").style.display = "none";
  };
  console.log(leiras);
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
                  <div className="container border">
                    <h1>Leiras:</h1>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Termék Neve</th>
                          <th>Mennyiség</th>
                          <th>Készleten</th>
                          <th>Eladási ár</th>
                          {/* {leiras.map((leirass) => (
                            <th></th>
                          ))} */}
                        </tr>
                      </thead>
                      <tbody>
                        {tabla.map((tablas) => (
                          <tr key={tablas.Termek}>
                            <td>
                            {tablas.elnevezes} {tablas.marka}
                            </td>
                            <td>{tablas.menny}</td>
                            <td>{tablas.keszlet}</td>
                            <td>{tablas.ar}</td>
                            {/* Csak az adott termékhez tartozó leírásokat jelenítjük meg */}
                            {leiras
                              .filter(
                                (leirass) => leirass.Termek === tablas.Termek
                              )
                              .map((leirass) => (
                                <td key={leirass.id}>
                                  {leirass.elnevezes}{leirass.ertek} {leirass.mertekegyseg}
                                </td>
                              ))}
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
