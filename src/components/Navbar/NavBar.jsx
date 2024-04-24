import CartWidget from "./CartWidget"
import "./navbar.css"
const NavBar = () => {
  return (
    <div className="NavBar">
        <p className="NavNombre">Trendy Threads</p>

        <ul className="NavProductos">
           <li>Remeras</li>
           <li>Pantalones</li>
           <li>Camperas</li>
           <li>Calzados</li>
        </ul>

        <CartWidget/>
    </div>
  )
}

export default NavBar