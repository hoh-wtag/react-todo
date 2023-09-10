import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, setTaskDone, editTask } from "@store/actions";
import { sanitizeText } from "@utils/helpers/sanitizeText";
import { ICON_DELETE, ICON_DONE, ICON_EDIT } from "@utils/constants/icons";
import {
  ALT_TEXT_DELETE_ICON,
  ALT_TEXT_DONE_ICON,
  ALT_TEXT_EDIT_ICON,
} from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { compareDates } from "@utils/helpers/compareDates";
import { displayToastNotification } from "@utils/helpers/displayToastNotification";
import IconButton from "@components/IconButton";
import TextButton from "@components/TextButton";
import "./index.scss";

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, isDone } = task;
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleDelete = () => {
    dispatch(deleteTask(id));
    displayToastNotification("Task Deleted", "error");
  };

  const handleDone = () => {
    dispatch(setTaskDone(id));
    displayToastNotification("Task Completed", "success");
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const getDaysToCompleteTask = (startDate, endDate) => {
    const diffInDays = compareDates(startDate, endDate);
    const daysStr = diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`;

    return daysStr;
  };

  const handleSave = () => {
    const sanitizedEditedTitle = sanitizeText(editedTitle);
    if (sanitizedEditedTitle === "") {
      displayToastNotification("Invalid Title", "danger");
      return;
    }
    dispatch(editTask(id, sanitizedEditedTitle));
    displayToastNotification("Task Edited", "success");
    setEditMode(false);
  };

  const handleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  return (
    <>
      {editMode ? (
        <div className="task-card">
          <textarea
            className="task-card__textarea"
            type="text"
            value={editedTitle}
            onChange={handleChange}
          />
          <div className="task-card__bottom">
            <div className="task-card__button-container">
              <TextButton
                className="button"
                buttonText={"Save"}
                onClick={handleSave}
              />
              <IconButton
                onClick={handleDone}
                alt={ALT_TEXT_DONE_ICON}
                src={ICON_DONE}
              />
              <IconButton
                onClick={handleDelete}
                alt={ALT_TEXT_DELETE_ICON}
                src={ICON_DELETE}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="task-card">
          <div className="task-card__top">
            <p
              className={`${isDone ? "task-card__title--done" : "task-card__title"
                }`}
            >
              {title}
            </p>
            <p className="task-card__date">
              Created At: {formatDate(createdDate)}
            </p>
          </div>
          <div className="task-card__bottom">
            <div className="task-card__button-container">
              {!isDone && (
                <>
                  <IconButton
                    onClick={handleDone}
                    alt={ALT_TEXT_DONE_ICON}
                    src={ICON_DONE}
                  />
                  <IconButton
                    onClick={handleEdit}
                    alt={ALT_TEXT_EDIT_ICON}
                    src={ICON_EDIT}
                  />
                </>
              )}
              <IconButton
                onClick={handleDelete}
                alt={ALT_TEXT_DELETE_ICON}
                src={ICON_DELETE}
              />
            </div>

            {isDone && (
              <p className="task-card__completed">
                Completed in {getDaysToCompleteTask(createdDate, completedDate)}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
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
