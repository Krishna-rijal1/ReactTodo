import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
