import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import "./NavBar.css"
import CardWidget from "../cardwidget/CardWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
 
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand>
              <Link
                style={{ color: "#FFFFFF", textDecoration: "none" }}
                to={"/"}
              >
                maxi
              </Link>
            </Navbar.Brand>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#link">Politicas</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/motherboard"}
              >
                Motherboard
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/procesador"}
              >
                Procesadores
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/placadevideo"}
              >
                Placa de video
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/fuente"}
              >
                Fuentes
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/gabinete"}
              >
                Gabinetes
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/categoria/almacenamiento"}
              >
                Discos de almacenamiento
              </Link>
              <Link
                style={{ color: "#232020", textDecoration: "none" }}
                className="link dropdown-item"
                to={"/"}
              >
                Todas
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CardWidget className="justify-content-end" /> 
      </Navbar>
      <div className="separador"></div>
    </React.Fragment>
  )
}

export default NavBar