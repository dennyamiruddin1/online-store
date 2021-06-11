import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { cart_icon } from "../../../icon";

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect bg="light" expand="xxl" style={{ zIndex: 20 }}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/">
        D & G
      </Navbar.Brand>
      <Nav>
        <Nav.Link eventKey as={Link} to="/cart">
          {cart_icon}
          <Badge bg="secondary">{props.cartQuantity}</Badge>
        </Nav.Link>
      </Nav>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#login">Log in/Sign up</Nav.Link>
          <NavDropdown title="Kategori" id="basic-nav-dropdown">
            <NavDropdown.Item
              className="bg-light text-dark"
              eventKey
              as={Link}
              to={`/filtered/products/${1}`}
            >
              Organik
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="bg-light text-dark"
              eventKey
              as={Link}
              to={`/filtered/products/${2}`}
            >
              Tembakau
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="bg-light text-dark"
              eventKey
              as={Link}
              to={`/filtered/products/${3}`}
            >
              Kopi
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              className="bg-light text-dark"
              eventKey
              as={Link}
              to={`/filtered/products/${4}`}
            >
              Rempah
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey as={Link} to="/admin">
            Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
