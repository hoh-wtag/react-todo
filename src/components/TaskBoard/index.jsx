import { useState } from "react";
import TaskList from "/src/components/TaskList";
import AddTask from "/src/components/Addtask";
import "./index.scss"

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="task-board">
      <div className="task-board__create-button-container margin-bottom">
        <button onClick={toggleForm}>
          + Create
        </button>
      </div>

      <div className="task-board__content flex wrap">
        <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskBoard;
