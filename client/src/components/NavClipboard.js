import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cookie from "../images/cookie-logo.png"
import './spin.css'



function NavBar() {


  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <img src={cookie} class="spin" alt="logo" height="100px"/>
          
        <Navbar.Brand href="/">Cookie Coder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/clipboard">Clipboard</Nav.Link>
            <Nav.Link href="/" class="Signup">Sign Out</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;