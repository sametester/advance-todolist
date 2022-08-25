import { useState } from 'react';
import TodoContent from './TodoContent';
import TodoForm from './TodoForm';

function TodoItem({ todo }) {
  const { completed, id } = todo;
  const [isEditing, setIsEditing] = useState({});
  return (
    <li
      className={`list-group-item p-3 callout-${
        completed ? 'success' : 'warning'
      }`}
    >
      {isEditing.id === id ? (
        <TodoForm />
      ) : (
        <TodoContent todo={todo} openEdit={() => setIsEditing(todo)} />
      )}
    </li>
  );
}

export default TodoItem;
