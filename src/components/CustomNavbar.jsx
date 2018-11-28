import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const CustomNavbar = () => (
    <div className="nav">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Vestegnens Trafikmafia</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <LinkContainer to="/">
            <NavItem>Hjem</NavItem>
          </LinkContainer>
          <LinkContainer to="/underskriv">
            <NavItem>Underskriv</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
);

export default CustomNavbar;