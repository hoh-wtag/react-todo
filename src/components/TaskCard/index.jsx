import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "/src/components/Button";
import { deleteTask, toggleTaskDone } from "/src/store/actions";
import { ICON_DELETE, ICON_DONE } from "/src/utils/constants/icons";
import { formatDate } from "/src/utils/helpers/formatDate";
import { getDaysToCompleteTask } from "/src/utils/helpers/compareDates"
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
      <p className={`${task.done ? "task-card--done__title" : "task-card__title"}`}>
        {task.title}
      </p>
      <p>Created At: {formatDate(task.createdDate)}</p>
      {task.done ?
        <>Completed in {getDaysToCompleteTask(task.createdDate, task.completedDate)}</> :
        <Button
          onClick={handleToggleDone}
          src={ICON_DONE}
        />
      }

      <Button
        onClick={handleDelete}
        src={ICON_DELETE}
      />
    </div >
  );
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    completedDate: PropTypes.instanceOf(Date),
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
