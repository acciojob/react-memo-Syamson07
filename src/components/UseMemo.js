import React, { useMemo } from "react";

const UseMemo = ({ task }) => {
  const isValid = useMemo(() => {
    console.log("Validating task length...");
    return task.length > 5;
  }, [task]);

  return (
    <div style={{ marginTop: 10 }}>
      {task.length > 0 && (
        <span style={{ color: isValid ? "green" : "red" }}>
          {isValid ? "Valid task ✅" : "Too short ❌"}
        </span>
      )}
    </div>
  );
};

export default UseMemo;
