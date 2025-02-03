import React, { useState } from 'react';
import Home from './Home';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask(""); 
    }
  }

  return (
    <>
      <Home addTask={addTask} />
      <ToDoList tasks={tasks} setTasks={setTasks} newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </>
  );
}

export default App;