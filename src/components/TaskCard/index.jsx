import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/actions";
import { DELETE } from "../../utils/constants/icons";

import "./index.scss"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div className="task-card">
      <p className="task-card__title">{task.title}</p>
      <p>Created At: {task.createdDate}</p>
      <img src={DELETE} onClick={handleDelete} />
    </div>
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.string,
  }),
};

export default TaskCard;
