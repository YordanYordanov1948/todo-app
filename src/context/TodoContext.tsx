import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Define the shape of the context
interface Todo {
  id: number;
  task: string;
  isCompleted: boolean;
}

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<any>;
}

// Initial state
const initialState: Todo[] = [];

// Create Context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Reducer function to manipulate todos
function todoReducer(state: Todo[], action: any) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

interface TodoProviderProps {
  children: ReactNode;
}

// Create a provider component
export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const value = { todos, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

// Custom hook to use the todo context
export function useTodos() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
}
