import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Container, NavItem, InputGroup, Button, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { v4 } from 'uuid';

interface Itasks {
  tasks: { task: string; id: string }[];
}

function Todo() {
  const tasks = useSelector((state: Itasks) => state.tasks);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const generateNewId = function () {
    const newId = v4();
    return newId;
  };

  const addNewTaskHandler = function () {
    if (newTask === '') return;
    generateNewId();
    dispatch({ type: 'add', value: { task: newTask, id: generateNewId() } });
    setNewTask('');
  };

  const deleteTaskHandler = function (e: React.FormEvent<HTMLButtonElement>) {
    const currentId = e.currentTarget.id;
    dispatch({ type: 'remove', id: currentId });
  };

  return (
    <main
      style={{ height: 'calc(100vh)' }}
      className="d-flex align-items-center justify-content-center bg-dark"
    >
      <Container className="bg-light px-3 py-5 p-sm-5 mx-3">
        <div className="d-flex flex-column align-items-center">
          <div>
            <h1>Todo App</h1>
          </div>
          <InputGroup className="w-70 my-5">
            <Input
              onChange={e => setNewTask(e.target.value)}
              value={newTask}
              type="text"
              className="form-control"
              placeholder="Add a new task"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button
              onClick={addNewTaskHandler}
              className="bg-primary px-4"
              type="button"
              id="button-addon2"
            >
              Add
            </Button>
          </InputGroup>
        </div>
        <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
          {tasks.length > 0 && (
            <h1 className="mb-5 text-center text-sm-start">List Of Tasks</h1>
          )}
          <Nav className="d-flex flex-wrap list-group w-70 m-auto">
            {tasks.map(item => {
              return (
                <NavItem
                  key={item.id}
                  className="list-group-item w-100 d-flex justify-content-between flex-column flex-sm-row align-items-center px-4"
                >
                  <p className="m-0">{item.task}</p>
                  <div>
                    <Button className="bg-warning text-dark border me-2">
                      <Link
                        className="text-decoration-none text-dark"
                        to={`/update/${item.id}`}
                      >
                        Update
                      </Link>
                    </Button>
                    <Button
                      onClick={deleteTaskHandler}
                      id={item.id}
                      className="bg-danger border"
                    >
                      Delete
                    </Button>
                  </div>
                </NavItem>
              );
            })}
            {tasks.length <= 0 && <h1> No Tasks </h1>}
          </Nav>
        </div>
      </Container>
    </main>
  );
}

export default Todo;
