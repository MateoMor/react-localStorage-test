import React from "react";

function TaskRow({ task, toggleTask}) {
    return (
        <tr>
            <td className="d-flex justify-content-between">
                {task.name}
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)} // Con esto se cambia el valor de done
                />
            </td>
        </tr>
    );
}

export default TaskRow;
