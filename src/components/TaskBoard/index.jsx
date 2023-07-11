import TaskList from '../TaskList';
import AddTask from '../Addtask';

import "./index.scss"

const TaskBoard = () => {
  return (
    <div className="task-board">
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskBoard;