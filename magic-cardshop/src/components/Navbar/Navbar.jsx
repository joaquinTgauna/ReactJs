import "./Navbar.css";
import { Link } from "react-router-dom";
import TotalItems from "../CartContent/TotalItems";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const { cart } = useContext(DataContext)

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="./imagenes/logo.jpg"
                            width="50"
                            height="50"
                            className="navbar-logo"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/products">Products</Nav.Link>
                        <Nav.Link href="/cards">Cards</Nav.Link>
                        <Nav.Link href="/deck">Deck</Nav.Link>
                        <Nav.Link href="/tools">Tools</Nav.Link>
                    </Nav>
                    <Link className="seeCarrito" to="/cart">🛒
                        {cart.length > 0 ? <TotalItems /> : null}

                    </Link>
                </Container>
            </Navbar>
            <br />
        </>

    )
}

export default NavBar



