import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask, completeTask } from "@store/actions";
import { filterTasks } from "@utils/helpers/filterTasks";
import TaskCard from "@components/TaskCard";
import "./index.scss";

const TaskList = ({ tasks, visibleTaskRange, isFormOpen, filter }) => {
  const dispatch = useDispatch();
  
  const [rangeOfTasks, setRangeOfTasks] = useState(visibleTaskRange);

  const filteredTasks = filterTasks(tasks, filter);

  let rangeOfTasks = visibleTaskRange;
  if (isFormOpen) {
    setRangeOfTasks(rangeOfTasks-1);
  }

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleCompletedTask = (taskId) => {
    completeTask(taskId);
  };

  return (
    <>
      {filteredTasks?.slice(0, rangeOfTasks).map((task) => (
        <TaskCard
          task={task}
          key={task.id}
          onDelete={() => handleDelete(task.id)}
          onDone={() => handleDone(task.id)}
        />
      ))}
    </>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isTaskDone: PropTypes.bool.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
  visibleTaskRange: PropTypes.number.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TaskList;
