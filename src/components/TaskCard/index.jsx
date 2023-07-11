import PropTypes from "prop-types";

import "./index.scss"

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <p>{task.title}</p>
      <p>{task.createdDate}</p>
      <button>Delete</button>
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.object,
};

export default TaskCard;
