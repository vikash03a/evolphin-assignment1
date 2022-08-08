import React from "react";

function Todo({ todo, handleChange }) {
  function handleCompleted() {
    handleChange(todo.id);
  }
  return (
    <div>
      <label htmlFor={`check-item-${todo.id}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          id={`check-item-${todo.id}`}
          onChange={handleCompleted}
        />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
