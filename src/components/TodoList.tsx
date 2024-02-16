import React from 'react';
import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import List from '@mui/material/List';

const TodoList: React.FC = () => {
  const { todos } = useTodos();

  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;
