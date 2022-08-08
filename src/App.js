import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);

  const inpTextElem = useRef(null);

  function handleChange(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = inpTextElem.current.value;

    if (name === "") return false;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });

    inpTextElem.current.value = null;
  }

  function handleClearTodos(e) {
    const yetTodo = todos.filter((todo) => !todo.completed);
    setTodos(yetTodo);
  }

  return (
    <div className="App">
      <br />
      <input
        className="input"
        ref={inpTextElem}
        type="text"
        placeholder="Add items..."
      />
      <button className="addbtn" onClick={handleAddTodo}>
        ADD
      </button>
      <button className="dltbtn" onClick={handleClearTodos}>
        DELETE
      </button>
      <br />
      <TodoList todos={todos} handleChange={handleChange} />
    </div>
  );
}

export default App;
