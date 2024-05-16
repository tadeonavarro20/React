import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="NavBar">


      <Link to="/" className="NavNombre">Trendy Threads </Link>

      <ul className="NavProductos">

        <Link to="/category/Remeras" className="NavProductos" >Remeras </Link>
        <Link to="/category/Pantalones" className="NavProductos" >Pantalones </Link>
        <Link to="/category/Buzos" className="NavProductos">Buzos </Link>
        <Link to="/category/Zapatillas"className="NavProductos" >Zapatillas </Link>

      </ul>


      <CartWidget />
    </nav>
  );
};

export default NavBar;
