import React from "react";

function VisibilityControl({ setShowCompleted, cleanTasks, isChecked }) {
    const handleDelete = () => {
        // Metodo para preguntarle al usuario Y/n
        if (window.confirm("Are you sure you want to delete it")) {
            cleanTasks();
        }
    };

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <div className="form-check form-switch">
                <input
                id="showTasksDone"
                    className="form-check-input"
                    type="checkbox"
                    onChange={(e) => setShowCompleted(e.target.checked)}
                    checked={isChecked}
                />
                <label for="showTasksDone">Show Taks Done</label>
            </div>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Clear
            </button>
        </div>
    );
}

export default VisibilityControl;
