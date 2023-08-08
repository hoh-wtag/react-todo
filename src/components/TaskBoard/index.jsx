import { useState } from "react";
import TaskList from "/src/components/TaskList";
import AddTask from "/src/components/Addtask";
import "./index.scss"

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="task-board">
      <div className="task-board__create-button-container margin-bottom">
        <button onClick={handleOpenForm}>
          + Create
        </button>
      </div>

      <div className="task-board__content flex wrap">
        {isFormOpen && (
          <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        )}
        <TaskList />
      </div>
    </div>
  );
};

export default TaskBoard;
