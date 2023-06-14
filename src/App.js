import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";
import {Container} from "./components/Container";

function App() {
    const [tasksItems, setTasksItems] = useState([]); // Se define taskItems como un arreglo vacio

    const [showCompleted, setShowCompleted] = useState(false);

    function createNewTask(taskName) {
        if (!tasksItems.find((task) => task.name === taskName)) {
            setTasksItems([...tasksItems, { name: taskName, done: false }]);
        } // La función find busca si un valor corresponde a un valor de un arreglo, de ser así lo devulve, de lo contrario devuelve undefined
    }

    const toggleTask = (task) => {
        setTasksItems(
            tasksItems.map((t) =>
                t.name === task.name ? { ...t, done: !t.done } : t
            ) // Si la propiedad que le están pasando corresponde a una del arreglo, cambiará su propiedad done al contrario
        );
    };

    // Este useEffect se ejecuta cada vez que la aplicación se inicia
    useEffect(() => {
        let data = localStorage.getItem("tasks");
        if (data) {
            setTasksItems(JSON.parse(data));
        }
    }, []);

    const cleanTasks = () => {
        setTasksItems(tasksItems.filter((task) => !task.done));
        setShowCompleted(false);
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksItems));
    }, [tasksItems]);

    return (
        <main className="bg-dark vh-100 text-white">
            <Container>
                <TaskCreator createNewTask={createNewTask} />
                <TaskTable
                    tasks={tasksItems}
                    toggleTask={toggleTask}
                    showCompleted={false}
                />
                <VisibilityControl
                    isChecked={showCompleted}
                    setShowCompleted={(checked) => setShowCompleted(checked)} // Aquí lo que realmente se pasa es una función que posterioremente será ejecutada
                    cleanTasks={cleanTasks}
                />

                {showCompleted && (
                    <TaskTable
                        tasks={tasksItems}
                        toggleTask={toggleTask}
                        showCompleted={showCompleted}
                    />
                )}
            </Container>
        </main>
    );
}

export default App;
