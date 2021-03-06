import { Input, Button, Container } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

function Update() {
  const [inputCurrentTask, setInputCurrentTask] = useState('');
  const { taskId } = useParams();
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const currentTask = tasks.filter((task: any) => task.id === taskId);
    const { task } = currentTask[0];
    setInputCurrentTask(task);
  }, []);

  const changeInputValue = function (e: any) {
    console.log(e.target.value);
    setInputCurrentTask(e.target.value);
  };

  const updateTaskslistHandler = function () {
    const newTasks = tasks.filter((item: any) => item.id !== taskId);
    newTasks.unshift({ task: inputCurrentTask, id: taskId });

    dispatch({ type: 'update', value: newTasks });
    navigate('/');
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <Container className="w-50 shadow p-3 border rounded text-center">
        <h1>Update Task</h1>
        <Input
          className="mt-4 mb-4"
          onChange={changeInputValue}
          value={inputCurrentTask}
        />
        <Button onClick={updateTaskslistHandler} className="px-4">
          {' '}
          Update{' '}
        </Button>
      </Container>
    </div>
  );
}

export default Update;
