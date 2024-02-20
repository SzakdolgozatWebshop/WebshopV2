import LoginForm from "./pages/Login";
import RegForm from "./pages/Reg";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegForm />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
