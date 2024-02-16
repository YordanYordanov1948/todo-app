// TodoForm.tsx
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useTodos } from '../context/TodoContext';

const TodoForm: React.FC = () => {
  const [task, setTask] = useState('');
  const { dispatch } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch({ type: 'ADD_TODO', payload: { id: Date.now(), task, isCompleted: false } });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem' }}>
      <TextField
        variant="outlined"
        label="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
