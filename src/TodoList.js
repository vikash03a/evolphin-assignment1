import React from "react";
import Todo from "./Todo";

function TodoList({ todos, handleChange }) {
  return todos.map(todo => (
    <Todo key={todo.id} todo={todo} handleChange={handleChange} />
  ));
}

export default TodoList;
