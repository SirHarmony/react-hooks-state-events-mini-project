import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({ text: "", category: "Code" });

  const newCategoriesArray = categories.filter(
    (category) => category !== "All"
  );
  const categoryOptions = newCategoriesArray.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });

  function handleChange(event) {
    setNewTask({
      ...newTask,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
