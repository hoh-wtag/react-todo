import { useState } from 'react';
import TaskList from '../TaskList';
import AddTask from '../Addtask';

import "./index.scss"

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="task-board">
      <div className="margin-bottom-10">
        <button onClick={toggleForm}>
          {isFormOpen ? '- Remove' : '+ Create'}
        </button>
      </div>

      <div className="flex wrap">
        <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskBoard;
