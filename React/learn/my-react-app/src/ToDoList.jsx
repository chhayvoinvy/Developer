import { useState } from "react";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask([""]);
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index -1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length-1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index+1]];
            setTasks(updatedTasks);
        }
    }

    return(
    <>

    <div id="toDo" className="to-do-list-container">
        <h1>To-Do</h1>
        <div>
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
            {tasks.map ((task, index) => (
                <li key={index}>{task}
                    <div className="action-buttons">
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>⬆</button>
                        <button onClick={() => moveTaskDown(index)}>⬇</button>
                    </div>
                </li>
            ))}
        </ol>
    </div>

    </>);
}

export default ToDoList