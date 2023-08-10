import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "@components/Button";
import { deleteTask, toggleTaskDone } from "@store/actions";
import { ICON_DELETE, ICON_DONE } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { getDaysToCompleteTask } from "@utils/helpers/compareDates"
import "./index.scss"

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, done } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleToggleDone = () => {
    dispatch(toggleTaskDone(id));
  };

  return (
    <div className="task-card">
      <p className={`${done ? "task-card--done__title" : "task-card__title"}`}>
        {title}
      </p>
      <p>Created At: {formatDate(createdDate)}</p>
      {done ?
        <>Completed in {getDaysToCompleteTask(createdDate, completedDate)}</> :
        <Button
          onClick={handleToggleDone}
          src={ICON_DONE}
        />
      }

      <Button
        onClick={handleDelete}
        src={ICON_DELETE}
      />
    </div>
  )
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    completedDate: PropTypes.instanceOf(Date),
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
