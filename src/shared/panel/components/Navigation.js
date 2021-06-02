import React from 'react';
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import { Navbar, Nav, NavDropdown, Badge } from 'react-bootstrap'

const Navigation = (props) => {

  const quantity = useSelector(state => state.cart.quantity)

  return (
    <Navbar collapseOnSelect bg="light" expand="xxl">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Brand as={Link} to="/" >D & G</Navbar.Brand>
      <Nav.Link eventKey as={Link} to="/cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
        </svg>
        <Badge bg="secondary">{quantity}</Badge>
      </Nav.Link>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Organic</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Tembakau</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Coffee</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link eventKey as={Link} to="/admin">Admin</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;