import React from "react";

const TodoItem = React.memo(({ todo }) => {
  console.log(`Rendering TodoItem: ${todo}`);
  return <li>{todo}</li>;
});

export default TodoItem;
