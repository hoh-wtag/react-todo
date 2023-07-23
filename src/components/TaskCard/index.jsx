import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTaskDone } from "/src/store/actions";
import { ICON_DELETE } from "/src/utils/constants/icons";
import { formatDate } from "/src/utils/helpers/formatDate";
import "./index.scss"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleDone = () => {
    dispatch(toggleTaskDone(task.id));
  };

  return (
    <div className="task-card">
      <p className="task-card__title" style={{ textDecoration: task.done ? 'line-through' : 'none' }}>{task.title}</p>
      <p>Created At: {formatDate(task.createdDate)}</p>
      <button onClick={handleToggleDone}>
        {task.done ? 'Undone' : 'Done'}
      </button>
      <button onClick={handleDelete}>
        <img src={ICON_DELETE} />
      </button>
    </div >
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
