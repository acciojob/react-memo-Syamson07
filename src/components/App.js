import React, { useState } from "react";
import UseMemo from "./UseMemo";
import TodoItem from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["Sample todo"]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  // Add a new todo with the label "New todo"
  const addNewTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  };

  // Increment counter
  const incrementCounter = () => {
    setCounter((c) => c + 1);
  };

  // Validate using useMemo inside UseMemo component
  // Here, validate length > 5 for customTask before adding
  const canAddCustomTask = customTask.length > 5;

  // Add custom task if valid
  const submitCustomTask = () => {
    if (canAddCustomTask) {
      setTodos((prevTodos) => [...prevTodos, customTask]);
      setCustomTask(""); // Clear input after adding
    } else {
      alert("Task must be more than 5 characters.");
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Task Management App with React Memo</h1>

      <div>
        <h2>Todos</h2>
        <button onClick={addNewTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, idx) => (
            <TodoItem key={idx} todo={todo} />
          ))}
        </ul>
      </div>

      <div>
        <h2>Custom Task Input</h2>
        <input
          type="text"
          value={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
          placeholder="Enter custom task"
        />
        <UseMemo task={customTask} />
        <button onClick={submitCustomTask} disabled={!canAddCustomTask}>
          Submit
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2>Counter: {counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    </div>
  );
};

export default App;
