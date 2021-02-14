const Todo = ({ todo, todos, setTodos }) => {
  // Complete
  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  // Delete
  const deleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </li>
      <button className='complete-btn' onClick={() => completeHandler(todo.id)}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={() => deleteHandler(todo.id)}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
