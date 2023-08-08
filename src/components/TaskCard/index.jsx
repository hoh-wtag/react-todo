import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "/src/store/actions";
import { ICON_DELETE } from "/src/utils/constants/icons";
import { formatDate } from "/src/utils/helpers/formatDate";
import "./index.scss"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  return (
    <div className="task-card">
      <p className="task-card__title">{task.title}</p>
      <p>Created At: {formatDate(task.createdDate)}</p>
      <button onClick={handleDelete}>
        <img src={ICON_DELETE} />
      </button>
    </div >
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default TaskCard;
