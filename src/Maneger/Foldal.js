import kep1 from "../kep/59.jpg";

export default function Foldal() {
  return (
    <div className="App">
      <div>
        <div className="row">
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            asdads
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            hello 2
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            helllo 3s
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            helllo 4a{" "}
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            <ul>
              <li style={{ listStyleType: "none", paddingTop: "5px" }}>
                <img src={kep1} width="260" height="200" />
              </li>

              <li style={{ listStyleType: "none" }}>
                <a>Ez egy táj kép </a>
              </li>
              <li style={{ listStyleType: "none" }}>
                <a>ara ft</a>
              </li>
            </ul>
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            asd
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            helllo 3s
          </div>
          <div
            className="col"
            style={{ border: "1px solid black", margin: "15px" }}
          >
            helllo 4a{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
