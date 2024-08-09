import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDeleteTask(taskToDelete) {
    const newTaskList = tasks.filter((task) => {
      return task.text !== taskToDelete;
    });
    setTasks(newTaskList);
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  const taskListToDisplay = tasks.filter((task) => {
    if (category === "All") {
      return true;
    } else {
      return task.category === category;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onCategoryClick={setCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={taskListToDisplay} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
