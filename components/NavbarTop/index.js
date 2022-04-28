import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import MainLogo from "../MainLogo";

export default function NavbarTop() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand href="#home" className="me-5">
            Fimarq Propiedades
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link>Inicio</Nav.Link>
            </Link>

            {/* <Link href="/about" passHref>
              <Nav.Link>Acerca de</Nav.Link>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
