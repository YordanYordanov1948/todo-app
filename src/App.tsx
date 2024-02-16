// App.tsx
import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Container from '@mui/material/Container';

function App() {
  return (
    <TodoProvider>
      <Container maxWidth="lg">
        <h1>ToDo App</h1>
        <TodoForm />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
