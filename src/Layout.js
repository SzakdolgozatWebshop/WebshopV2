import { Outlet, Link } from "react-router-dom";

const Layout = () => {  
  return (
    <>
    <div>
    
      <nav>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Fő oldal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="keszlet">Keszlet</Link>
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