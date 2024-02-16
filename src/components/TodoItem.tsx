import React from 'react';
import { useTodos } from '../context/TodoContext';
import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

interface TodoItemProps {
  todo: {
    id: number;
    task: string;
    isCompleted: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodos();

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" onClick={() => dispatch({ type: 'DELETE_TODO', payload: { id: todo.id } })}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={todo.isCompleted}
        tabIndex={-1}
        disableRipple
        inputProps={{ 'aria-labelledby': `checkbox-list-label-${todo.id}` }}
        onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: { id: todo.id } })}
      />
      <ListItemText primary={todo.task} />
    </ListItem>
  );
};

export default TodoItem;
