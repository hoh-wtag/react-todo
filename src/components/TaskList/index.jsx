import { useSelector } from "react-redux";
import TaskCard from "/src/components/TaskCard";
import PropTypes from "prop-types";
import "./index.scss";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    tasks.map((task) => (
      <TaskCard key={task.id} task={task} />
    ))
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      createdDate: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};

export default TaskList;
