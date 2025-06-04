import React from "react";

const TodoItem = React.memo(({ todo }) => {
  console.log(`Rendering Todo: ${todo}`);

  return <li>{todo}</li>;
});

export default TodoItem;
