import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask, editTask } from "@store/actions";
import { sanitizeText } from "@utils/helpers/sanitizeText"
import { ICON_DELETE, ICON_DONE, ICON_EDIT } from "@utils/constants/icons";
import {
  ALT_TEXT_DELETE_ICON,
  ALT_TEXT_DONE_ICON,
  ALT_TEXT_EDIT_ICON,
} from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { compareDates } from "@utils/helpers/compareDates"
import IconButton from "@components/IconButton";
import TextButton from "@components/TextButton";
import "./index.scss";

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, isTaskDone } = task;
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  function handleDone(){
    dispatch(completeTask(id));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const getRemainingDaysToCompleteTask  = (startDate, endDate) => {
    const dayDifference  = compareDates(startDate, endDate);
    const daysCount = dayDifference > 1 ? `${dayDifference} days` : `${dayDifference} day`;

    return daysCount;
  };

  const handleSave = () => {
    const sanitizedEditedTitle = sanitizeText(editedTitle);
    if (sanitizedEditedTitle === "") {
      setError("Invalid Text");
      return;
    }
    dispatch(editTask(id, sanitizedEditedTitle));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditMode(false);
  };

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <>
      {editMode ? (
        <div className="task-form" >
          <textarea
            className="task-form__textarea"
            type="text"
            value={editedTitle}
            onChange={handleChange}
          />
          {error && <small className="task-form__error">{error}</small>}
          <TextButton buttonText={"Save"} onClick={handleSave} />
          <TextButton buttonText={"Cancel"} onClick={handleCancel} />
        </div >
      ) : (
        <div className="task-card">
          <p className={`${isTaskDone ? "task-card--done__title" : "task-card__title"}`}>
            {title}
          </p>
          <p>Created At: {formatDate(createdDate)}</p>
          {isTaskDone ?
            <>Completed in {getRemainingDaysToCompleteTask(createdDate, completedDate)}</> :
            <IconButton
              onClick={handleDone}
              alt={ALT_TEXT_DONE_ICON}
              src={ICON_DONE}
            />
          }
          <IconButton
            onClick={handleEdit}
            alt={ALT_TEXT_EDIT_ICON}
            src={ICON_EDIT}
          />
          <IconButton
            onClick={handleDelete}
            alt={ALT_TEXT_DELETE_ICON}
            src={ICON_DELETE}
          />
        </div>
      )
      }
    </>
  );
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
