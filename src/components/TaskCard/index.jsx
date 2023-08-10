import { useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "@components/Button";
import { deleteTask, toggleTaskDone, editTask } from "@store/actions";
import { sanitizeText } from "@utils/helpers/sanitizeText"
import { ICON_DELETE, ICON_DONE, ICON_EDIT } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON, ALT_TEXT_DONE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import { getDaysToCompleteTask } from "@utils/helpers/compareDates"
import "./index.scss"

const TaskCard = ({ task }) => {
  const { id, title, createdDate, completedDate, done } = task;
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  const handleToggleDone = () => {
    dispatch(toggleTaskDone(id));
  };

  const handleEdit = () => {
    setEditMode(true);
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
          <button onClick={handleSave} > Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div >
      ) : (
        <div className="task-card">
          <p className={`${done ? "task-card--done__title" : "task-card__title"}`}>
            {title}
          </p>
          <p>Created At: {formatDate(createdDate)}</p>
          {done ?
            <>Completed in {getDaysToCompleteTask(createdDate, completedDate)}</> :
            <Button
              onClick={handleToggleDone}
              alt={ALT_TEXT_DELETE_ICON}
              src={ICON_DONE}
            />
          }
          <Button
            onClick={handleEdit}
            src={ICON_EDIT}
          />
          <Button
            onClick={handleDelete}
            alt={ALT_TEXT_DONE_ICON}
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
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
