import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, setTaskDone } from "@store/actions";
import { ICON_DELETE, ICON_DONE } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON, ALT_TEXT_DONE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { compareDates } from "@utils/helpers/compareDates"
import Button from "@components/Button";
import "./index.scss"

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, isDone } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  function handleDone(){
    dispatch(setTaskDone(id));
  };

  const getDaysToCompleteTask = (startDate, endDate) => {
    const diffInDays = compareDates(startDate, endDate);
    const daysStr = diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`;

    return daysStr;
  };

  return (
    <div className="task-card">
      <p className={`${isDone ? "task-card--done__title" : "task-card__title"}`}>
        {title}
      </p>
      <p>Created At: {formatDate(createdDate)}</p>
      {isDone ?
        <>Completed in {getDaysToCompleteTask(createdDate, completedDate)}</> :
        <Button
          onClick={handleDone}
          alt={ALT_TEXT_DONE_ICON}
          src={ICON_DONE}
        />
      }

      <Button
        onClick={handleDelete}
        alt={ALT_TEXT_DELETE_ICON}
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
    isDone: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
