import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "@store/actions";
import { ICON_DELETE } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
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
        <img src={ICON_DELETE} alt={ALT_TEXT_DELETE_ICON} />
      </button>
    </div >
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default TaskCard;
