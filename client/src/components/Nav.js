import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import home from "../images/cookieCoder.png";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" width="100%">
      <Container>
        <img src={home} className="App-logo" alt="logo" height="100px"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Login</Nav.Link>
            <Nav.Link href="/FormSignUp">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
