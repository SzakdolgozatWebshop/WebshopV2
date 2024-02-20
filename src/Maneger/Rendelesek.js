export default function Rendeles() {
  return (
    <div className="App">
      Rendelések
      <div className="container mt-3">
        <table className="table table-bordered">
          <tr>
            <th>ID</th>
            <th>Felhasználó</th>
            <th>Rendeles Azonositó</th>
            <th></th>
          </tr>
          <tr>
            <td>1</td>
            <td>Alfreds Futterkiste</td>
            <td>21</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={Megtekintes}
              >
                Megtekintés
              </button>
            </td>
          </tr>
        </table>
      </div>
      <from action="/action_page.php" method="post">
        <div id="RendelesModal" style={{ display: "none" }} className="modal ">
          <div class="modal-dialog">
          <div className="modal-content" style={{backgroundColor:"gray"}}>
            <div class="modal-header" >
              <table className="table table-bordered">
                <tr>
                  <th>Termék ID:</th>
                  <th>Termék Márka:</th>
                  <th>Termék Neve:</th>
                  <th>Termék DB:</th>
                  <th>csomagolva</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Acer</td>
                  <td>Predator</td>
                  <td>1</td>
                  <td>
                    
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      ></input>
                    
                  </td>
                </tr>
              </table>
              <p style={{ paddingTop: "10px" }}>
                <button type="submit" className="btn btn-danger">
                  Küldés
                </button>
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={MegtekintesBezaras}
              >
                Close
              </button>
            </div>
          </div>
          </div>
        </div>
      </from>
    </div>
  );
}
function Megtekintes() {
  document.getElementById("RendelesModal").style.display = "block";
}
function MegtekintesBezaras() {
  document.getElementById("RendelesModal").style.display = "none";
}
