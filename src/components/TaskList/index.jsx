import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import TaskCard from "@components/TaskCard";
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
