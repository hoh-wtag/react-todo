import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { deleteTask, setTaskDone } from "@store/actions";
import { filterTasks } from "@utils/helpers/filterTasks";
import { searchTasks } from "@utils/helpers/searchTasks";
import TaskCard from "@components/TaskCard";
import "./index.scss";

const TaskList = ({ tasks, visibleTaskRange, isFormOpen, filter }) => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);

  const filteredTasks = filterTasks(tasks, filter);

  const searchedTasks = searchTasks(filteredTasks, searchQuery);

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
      {searchedTasks?.slice(0, rangeOfTasks).map((task) => (
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
  filter: PropTypes.string.isRequired,
};

export default TaskList;
