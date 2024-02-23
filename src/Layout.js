import { Outlet, Link } from "react-router-dom";
import LogoutForm from "./user_auth/Logout";
import useAuthContext from "./context/AuthContext";
import { useEffect } from "react";

const Layout = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                <li className="nav-item">
                  <LogoutForm />
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
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
            {/* <li className="nav-item">
              <a className="nav-link">
                <LogoutForm />
              </a>
            </li> */}
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
