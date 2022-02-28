import "bootstrap/dist/css/bootstrap.css";
import { Nav, Container, NavItem, InputGroup, Button, Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

interface Itasks {
  tasks: string[];
}

function Todo() {
  const tasks = useSelector((state: Itasks) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  console.log(tasks);

  const addNewTaskHandler = function () {
    dispatch({ type: "add", value: newTask });
  };

  return (
    <main className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
      <Container className="bg-light p-5 w-50">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h1>Todo App</h1>
          </div>
          <InputGroup className="w-70 my-5">
            <Input
              onChange={(e) => setNewTask(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Add a new task"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button
              onClick={addNewTaskHandler}
              className="btn w-5"
              type="button"
              id="button-addon2"
            >
              Button
            </Button>
          </InputGroup>
        </div>
        <div>
          <h1 className="mb-5">List Of Tasks</h1>
          <Nav className="list-group w-70 m-auto">
            {tasks.map((item) => {
              return (
                <NavItem className="list-group-item w-100">{item}</NavItem>
              );
            })}
          </Nav>
        </div>
      </Container>
    </main>
  );
}

export default Todo;
