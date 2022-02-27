import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavbarBrand,
  Container,
  NavItem,
  NavLink,
  InputGroup,
  Button,
  Input
} from "reactstrap";

function App() {
  return (
    <div className="App">
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
      <main className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
        <Container className="bg-light p-5 ">
          <div className="d-flex flex-column align-items-center">
            <div>
              <h1>My Tasks</h1>
            </div>
            <InputGroup className="w-50 my-5">
              <Input
                type="text"
                className="form-control"
                placeholder="Add a new task"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <Button className="btn w-5" type="button" id="button-addon2">
                Button
              </Button>
            </InputGroup>
          </div>
          <div>
            <h1 className="mb-5">List Of Tasks</h1>
            <Nav className="list-group w-50 m-auto">
              <NavItem className="list-group-item ">An item</NavItem>
              <NavItem className="list-group-item">A second item</NavItem>
              <NavItem className="list-group-item ">An item</NavItem>
              <NavItem className="list-group-item">A second item</NavItem>
            </Nav>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
