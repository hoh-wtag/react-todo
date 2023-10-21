import { useState } from "react";
import TaskList from "@components/TaskList";
import AddTask from "@components/Addtask";
import TextButton from "@components/TextButton";
import "./index.scss"

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="task-board">
      <div className="task-board__create-button-container margin-bottom">
        <TextButton
          text={"+ Create"}
          onClick={handleOpenForm}
        />
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
