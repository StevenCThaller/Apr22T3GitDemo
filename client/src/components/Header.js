import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const title = pathname.toLowerCase().startsWith("/heroes")
    ? "Hero Central"
    : pathname.toLowerCase().startsWith("/villains")
    ? "Villain Central"
    : "Super Central";
  return (
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="supernav" />
        <Navbar.Collapse id="supernav">
          <Nav className="me-auto">
            <Nav.Link eventKey={1} as={Link} to="/heroes">
              Heroes
            </Nav.Link>
            <Nav.Link eventKey={2} as={Link} to="/villains">
              Villains
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {pathname.includes("/heroes") ? (
              <>
                <Nav.Link eventKey={3} as={Link} to="/heroes/create">
                  Create Hero
                </Nav.Link>
              </>
            ) : pathname.includes("/villains") ? (
              <>
                <Nav.Link eventKey={3} as={Link} to="/heroes/create">
                  Create Villain
                </Nav.Link>
              </>
            ) : (
              ""
            )}
          </Nav>
          <Nav>
            <NavDropdown title="Account Options">
              <NavDropdown.Item eventKey={7} as={Link} to="/login">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Item eventKey={8} as={Link} to="/register">
                Sign Up
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
