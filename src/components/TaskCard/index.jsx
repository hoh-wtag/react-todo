import { useState } from 'react';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "/src/components/Button";
import { deleteTask, toggleTaskDone, editTask } from "/src/store/actions";
import { sanitizeText } from "/src/utils/helpers/sanitizeText"
import { ICON_DELETE, ICON_DONE, ICON_EDIT } from "/src/utils/constants/icons";
import { formatDate } from "/src/utils/helpers/formatDate";
import { getDaysToCompleteTask } from "/src/utils/helpers/compareDates"
import "./index.scss"

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleToggleDone = () => {
    dispatch(toggleTaskDone(task.id));
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
    dispatch(editTask(task.id, sanitizedEditedTitle));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditedTitle(task.title);
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
            onClick={handleEdit}
            src={ICON_EDIT}
          />
          <Button
            onClick={handleDelete}
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
    completedDate: PropTypes.instanceOf(Date),
    done: PropTypes.bool.isRequired,
  }),
};

export default TaskCard;
