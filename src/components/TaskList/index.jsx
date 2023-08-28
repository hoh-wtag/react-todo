import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { deleteTask, setTaskDone } from '@store/actions';
import TaskCard from "@components/TaskCard";
import "./index.scss";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleDone = (taskId) => {
    setTaskDone(taskId);
  };

  return (
    tasks.map((task) => (
      <TaskCard
        key={task.id}
        task={task}
        onDelete={() => handleDelete(task.id)}
        onDone={() => handleDone(task.id)}
      />
    ))
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

export default TaskList;
