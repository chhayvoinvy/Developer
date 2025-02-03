import React from 'react';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';


function ToDoList({ tasks, setTasks, newTask, setNewTask, addTask }) {

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div id="toDo" className="to-do-list-container">
      <div className="add-tasks">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          className="add-task"
          onClick={addTask}
        >+</button>
      </div>
      <ol>
        <DndContext collisionDetection={closestCorners}>
            
            {tasks.map((task, index) => (
                <li key={index}>{task}
                    <div className="action-buttons">
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>⬆</button>
                    <button onClick={() => moveTaskDown(index)}>⬇</button>
                    </div>
                </li>
            ))}
        </DndContext>
      </ol>
    </div>
  );
}

export default ToDoList;