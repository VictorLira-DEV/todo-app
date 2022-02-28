import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavbarBrand,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";

function Navigation() {
  return (
    <Navbar className="navbar-expand-md bg-dark navbar-dark py-3 ">
      <Container className="d-flex align-itens-center justify-content-between">
        <NavbarBrand href="#" className="navbar-brand">
          Front-end Bootcamp
        </NavbarBrand>
        <Nav className="d-flex">
          <NavItem>
            <NavLink className="text-light" href="#">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-light" href="#">
              Contacts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-light" href="#">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
