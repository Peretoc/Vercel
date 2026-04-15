import { useState } from "react";
import React from "react";

// TaskItem - Tasca individual
function TaskItem({ taskName, completed, onToggle }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ marginLeft: "10px", textDecoration: completed ? "line-through" : "none" }}>
        {taskName}
      </span>
    </div>
  );
}

// TaskList - Llista de tasques
function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Aprendre React", completed: false },
    { id: 2, taskName: "Fer els exercicis", completed: false },
    { id: 3, taskName: "Practicar components", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Llista de Tasques</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.taskName}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </div>
  );
}

// Application - Component principal
function Application() {
  return <TaskList />;
}

export default Application;
