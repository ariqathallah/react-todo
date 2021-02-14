import { useEffect, useState } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // states
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [filterTodos, setFilterTodos] = useState([]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
  };

  // useEffect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className='App'>
      <header>
        <h1>Mein To Do</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
