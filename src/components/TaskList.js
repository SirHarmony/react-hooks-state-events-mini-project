import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const tasksToDisplay = tasks.map((task, i) => (
    <Task
      key={`${task.text}${i + 1}`}
      category={task.category}
      text={task.text}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <div className="tasks">
      <ul>{tasksToDisplay}</ul>
    </div>
  );
}

export default TaskList;
