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
      <button onClick={toggleForm}>
        {isFormOpen ? 'Close Form' : 'Open Form'}
      </button>
      <div className="flex wrap">
        <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <TaskList />
      </div>
    </div>
  );
};

export default TaskBoard;