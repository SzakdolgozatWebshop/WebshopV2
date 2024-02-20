export default function Profil() {
  return (
    <div className="App">
      Profil
      
        <div className="card" style={{ paddingTop: "60px" }}>
          <h1>$user_name</h1>
          <p class="title">$jogosultsag</p>
          <button onClick={JelszoModal} className="modal-header">
            Jelszó Módosítása
          </button>
          
        </div>
      
      <from action="/action_page.php" method="post">
      <div
        id="jelszoModal"
        style={{ display: "none" }}
        className="modal"
      >
      <div class="modal-dialog"></div>
        <div className="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Jelszó modositása</h4>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
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
      </from>
    </div>
    
  );
  function JelszoModal() {
    document.getElementById("jelszoModal").style.display = "block";
  }
  function JelszoBezar() {
    document.getElementById("jelszoModal").style.display = "none";
  }
}
