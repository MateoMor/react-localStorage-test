import React from "react";
import { useState } from "react";

function TaskCreator({ createNewTask }) {
    const [newTaskName, setNewTaskName] = useState(""); // Se crea la variable newTaskName con un string vacio

    const handleSubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName); // Esta función sale del argumento dado a TaskCreator en App.js
        setNewTaskName("");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="my-2 row">
            <div className="col-9">
                <input
                    type="text"
                    placeholder="Enter a new task"
                    value={newTaskName} // Con esto relaciono newTaskName con el valor del input
                    onChange={(e) => setNewTaskName(e.target.value)} // Va cambiando de valor cada que se tipea
                    className="form-control"
                />
            </div>

            <div className="col-3"><button className="btn btn-primary btn-sm">Save Task</button></div>
        </form>
    );
}

export default TaskCreator;
