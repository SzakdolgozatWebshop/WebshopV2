import "./App.css";
import Foldal from "./Maneger/Foldal.js";
import Keszlet from "./Maneger/Keszlet.js";
import Rendeles from "./Maneger/Rendelesek";
import Layout from "./Layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./Maneger/Profil";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Foldal />} />
            <Route path="keszlet" element={<Keszlet />} />
            <Route path="Rendeles" element={<Rendeles />} />
            <Route path="Profil" element={<Profil />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
