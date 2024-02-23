import Layout from "../Layout";

export default function Profil() {
  return (
    <div className="App">
            <Layout />
      Profil
      
        <div  className="container "style={{ paddingTop: "60px" }}>
          <h1>$user_name</h1>
          <p className="title">$jogosultsag</p>
          <div style={{
            marginLeft: "45%",

          }}>
          <button onClick={JelszoModal} className="modal-header mt-4  ">
            Jelszó Módosítása
          </button>
          </div>
          
        </div>
      
      <form action="/action_page.php" method="post">
      <div
        id="jelszoModal"

        className="modal mt-3"
      >
      <div className="modal-dialog "></div>
        <div className="modal-content ">
          <div className="modal-header">
            <h4 className="modal-title ">Jelszó modositása</h4>
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
