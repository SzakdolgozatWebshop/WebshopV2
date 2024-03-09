import { Outlet, Link } from "react-router-dom";
import LogoutForm from "./user_auth/Logout";
import useAuthContext from "./context/AuthContext";
import { useState } from "react";

const Layout = () => {
  const { user } = useAuthContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Profil
                  </Link>
                </li>
                {user?.permission <= 1 ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/rend">
                        Rendelések
                      </Link>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {user?.permission === 0 ? (
                  <>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        Admin
                      </Link>
                      <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="/admin">Admin Dashboard</Link></li>
                        <li><Link className="dropdown-item" to="/umanage">Felhasználók kezelése</Link></li>
                      </ul>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                <li className="nav-item">
                  <LogoutForm />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" id="login">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      <article>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </article>
    </>
  );
};

export default Layout;
