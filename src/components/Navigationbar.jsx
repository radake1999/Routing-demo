
import { Container,Navbar,Nav,NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function Navigationbar(){
return(
     //ancker tag alwas take relode <a href></a>
     //we need modified anchor tag
    /*<div>
        //ancker tag alwas take relode
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
    </div>*/
<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to='/'>
                <Nav.Link >Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/About'>
                <Nav.Link >About Us</Nav.Link>
        </LinkContainer>
         <LinkContainer to="/contact">
                <Nav.Link >contact </Nav.Link>
                </LinkContainer>
         
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}