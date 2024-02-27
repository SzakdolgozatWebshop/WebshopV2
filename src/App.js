import './App.css';
import LoginForm from "./user_auth/Login";
import RegForm from "./user_auth/Reg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import { AuthProvider } from "./context/AuthContext";
import Succ_reg from "./user_auth/succ_reg";
import Public from "./pages/Public";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import GuestLayout from "./layouts/GusetLayout";
import Profil from "./Maneger/Profil";
import Rendeles from "./Maneger/Rendelesek";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/rend" element={<Rendeles />} />
        </Route>
        <Route path="/admin" element={<Admin />} />

        <Route path="/" element={<Public />} />
        <Route path="/dashboard" element={<Profil />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegForm />} />
        <Route path="/succreg" element={<Succ_reg />} />
      </Routes>
    </div>
  );
}

export default App;
