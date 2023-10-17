import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "@store/actions";
import { ICON_DELETE, ICON_DONE } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON, ALT_TEXT_DONE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { compareDates } from "@utils/helpers/compareDates";
import Button from "@components/Button";
import "./index.scss";

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, isTaskDone } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  function handleDone(){
    dispatch(completeTask(id));
  };

  const getRemainingDaysToCompleteTask  = (startDate, endDate) => {
    const dayDifference  = compareDates(startDate, endDate);
    const daysCount = dayDifference > 1 ? `${dayDifference} days` : `${dayDifference} day`;

    return daysCount;
  };

  return (
    <div className="task-card">
      <p className={`${isTaskDone ? "task-card--done__title" : "task-card__title"}`}>
        {title}
      </p>
      <p>Created At: {formatDate(createdDate)}</p>
      {isTaskDone ?
        <>Completed in {getRemainingDaysToCompleteTask(createdDate, completedDate)}</> :
        <Button
          onClick={handleDone}
          imageAltText={ALT_TEXT_DONE_ICON}
          src={ICON_DONE}
        />
      }

      <Button
        onClick={handleDelete}
        imageAltText={ALT_TEXT_DELETE_ICON}
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
    isTaskDone: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
