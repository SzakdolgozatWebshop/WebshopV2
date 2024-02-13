import LoginForm from "./pages/Login";
import RegForm from "./pages/Reg";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="/login" element={<LoginForm />}/>
          <Route path="/register" element={<RegForm />}/>
          <Route path="/admin" element={<Admin />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
