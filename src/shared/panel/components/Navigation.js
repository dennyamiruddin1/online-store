import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { cart_icon } from "../../../icon";

const Navigation = (props) => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Navbar collapseOnSelect bg="light" expand="xxl" style={{ zIndex: 20 }}>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/">
        D & G
      </Navbar.Brand>
      <Nav>
        <Nav.Link eventKey as={Link} to="/cart">
          {cart_icon}
          <Badge bg="secondary">{quantity}</Badge>
        </Nav.Link>
      </Nav>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Organic</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tembakau</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Coffee</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link eventKey as={Link} to="/admin">
            Admin
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
