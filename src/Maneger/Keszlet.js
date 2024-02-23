import Layout from "../Layout";

export default function Keszlet() {
  return (

    <div className="App">
      <Layout />
      Termék Lista
      <div className="container mt-3">
      <table className="table table-bordered ">
        <tbody>
        <tr>
          <th>Termék ID</th>
          <th>Termék Neve</th>
          <th>Leirás</th>
          <th>Mennyiség</th>
          <th>Ára</th>
          <th></th>
        </tr>
        <tr>
          <td>1</td>
          <td>Predator</td>
          <td>Laptop</td>
          <td>1</td>
          <td>50000</td>
          <td><button type="button" onClick={Leiras} className="btn btn-danger">Bővebben</button></td>
        </tr>
        </tbody>
      </table>
      </div>
      <form action="/action_page.php" method="post">
      <div
        id="LeirasModal"
        style={{ display: "none" }}
        className="modal"
      >
      <div className="modal-dialog"></div>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Jelszó modositása</h4>
          </div>
          <div className="modal-body">
            <p style={{ paddingTop: "5px" }}>Jelszó régi jelszó</p>
            <input
              type="password"
              placeholder="Régi jelszó"
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
              <button type="submit" className="btn btn-danger">Küldés</button>
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={LeirasBezar}
            >
              Close
            </button>
          </div>
         
        </div>
      </div>
      </form>
    </div>
    
  );
}
function Leiras(){
  document.getElementById("LeirasModal").style.display = "block";
}
function LeirasBezar() {
  document.getElementById("LeirasModal").style.display = "none";
}