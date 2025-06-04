import React, { useMemo } from "react";

const UseMemo = ({ task }) => {
  // useMemo to compute validity of the task input (length > 5)
  const isValid = useMemo(() => {
    console.log("Validating task input...");
    return task.length > 5;
  }, [task]);

  return (
    <div>
      <p>Task length: {task.length}</p>
      <p>{isValid ? "Task is valid 👍" : "Task must be more than 5 characters."}</p>
    </div>
  );
};

export default UseMemo;
