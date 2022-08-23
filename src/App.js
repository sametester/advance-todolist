import axios from 'axios';
import { useEffect, useState } from 'react';
import TodoContainer from './components/TodoContainer';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([]);

  //* #1 async await
  const fetchTodos = async () => {
    try {
      const res = await axios.get('http://localhost:8080/todos');
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  //* #2 then catch
  useEffect(() => {
    // axios
    //   .get('http://localhost:8080/todos')
    //   .then(res => {
    //     setTodos(res.data.todos);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    fetchTodos();
  }, []);

  return (
    <div className="container mt-5 mb-3" style={{ maxWidth: 576 }}>
      <div className="my-4">
        <TodoForm fetchTodos={fetchTodos} />
      </div>
      <TodoContainer todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
