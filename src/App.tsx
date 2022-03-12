import './App.css';
import Todo from './pages/Todo';
import Update from './pages/Update';
import { Route, Routes } from 'react-router-dom';
import Layoult from './components/layoult/Layout';

function App() {
  return (
    <Layoult>
      <main>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/update/:taskId" element={<Update />} />
        </Routes>
      </main>
    </Layoult>
  );
}

export default App;
