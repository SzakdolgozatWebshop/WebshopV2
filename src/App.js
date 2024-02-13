import "./App.css";
import Foldal from "./Maneger/Foldal.js";
import Keszlet from "./Maneger/Keszlet.js";
import Layout from "./Layout.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Foldal />} />
            <Route path="keszlet" element={<Keszlet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
