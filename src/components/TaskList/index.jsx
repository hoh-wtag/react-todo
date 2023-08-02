import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import TaskCard from "/src/components/TaskCard";
import PropTypes from "prop-types";
import {
  deleteTask,
  toggleTaskDone,
} from '/src/store/actions';

import "./index.scss";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleToggleDone = (taskId) => {
    toggleTaskDone(taskId);
  };

  return (
    tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onDelete={() => handleDelete(task.id)}
        onToggleDone={() => handleToggleDone(task.id)}
      />
    ))
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ),
};

export default TaskList;
