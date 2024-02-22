import { Outlet, Link } from "react-router-dom";

const Layout = () => {  
  return (
    <>
    <div>
    
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Főoldal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="keszlet">Termék Lista</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link active" to="Rendeles">Rendeles</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="Profil">Profil</Link>
      </li>
        </ul>
      </nav>
      <article>
      
        <Outlet />
      </article>
      </div>
    </>
  );
};

export default Layout;  