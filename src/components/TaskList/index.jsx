import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask, setTaskDone } from "@store/actions";
import TaskCard from "@components/TaskCard";
import "./index.scss";

const TaskList = ({ tasks, visibleTaskRange, isFormOpen }) => {
  const dispatch = useDispatch();

  let rangeOfTasks = visibleTaskRange;
  if (isFormOpen) {
    rangeOfTasks -= 1;
  }

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleDone = (taskId) => {
    setTaskDone(taskId);
  };

  return (
    <>
      {tasks?.slice(0, rangeOfTasks).map((task) => (
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
      isDone: PropTypes.bool.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
  visibleTaskRange: PropTypes.number.isRequired,
  isFormOpen: PropTypes.bool.isRequired,
};

export default TaskList;
