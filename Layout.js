import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/">HOME  </Link>
          
            <Link to="/Mobiles">MOBILES  </Link>

            <Link to="/Offers">OFFERS  </Link>
          
            <Link to="/Contact">CONTACT_US </Link>          
      </nav>
            
      <Outlet />
    </>
  )
};

export default Layout;