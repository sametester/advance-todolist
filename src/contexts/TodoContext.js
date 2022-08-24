import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/todos')
      .then(res => {
        setTodos(res.data.todos);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={{ todos }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;

export { TodoContext };
