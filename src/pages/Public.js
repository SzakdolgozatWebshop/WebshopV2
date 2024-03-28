import React, { useEffect, useState } from 'react';
import Layout from "../Layout";
import useAuthContext from "../context/AuthContext";

function Public() {
  const { user } = useAuthContext();
  console.log(user);

  const [termek, setTermek] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/items")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setTermek(data))
      .catch((error) => {
        console.error("Error fetching termek data:", error);
      });
  }, []);


  return (
    <div className="app">
      <Layout />
      <article>
        <div className='thatter'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Termék ID</th>
                <th>Márka</th>
                <th>Elnevezés</th>
                <th>Eladási Ár</th>
              </tr>
            </thead>
            <tbody>
              {termek.map((termeks) => (
                <tr key={termeks.ter_id}>
                  <td>{termeks.ter_id}</td>
                  <td>{termeks.marka}</td>
                  <td>{termeks.elnevezes}</td>
                  <td>{termeks.eladasi_ar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
}

export default Public;