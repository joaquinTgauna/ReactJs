import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="nav-conteiner">
            <nav className="navbar">
                <a href="logo">
                    <img className="navbar-logo" src="logo.jpg" alt="" />
                </a>
                <Link className="seeCarrito" to="/cart">🛒</Link>
            </nav>
        </div>
    )
}

export default Navbar



