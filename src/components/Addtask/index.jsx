import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../store/actions";
import { sanitizeText } from "../../utils/helpers/sanitizeText"
import "./index.scss";

const AddTask = ({ isFormOpen, setIsFormOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedTitle = sanitizeText(title);
    if (sanitizedTitle === "") {
      setError("Invalid Text");
      return;
    }
    dispatch(addTask(sanitizedTitle));
    setTitle("");
    setIsFormOpen(false);
  };

  return (
    <>
      {isFormOpen && (
        <div className="task-form">
          <form onSubmit={handleSubmit}>
            <textarea
              className="task-form__textarea"
              type="text"
              placeholder="Add a task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {error && <small className="task-form__error">{error}</small>}
            <button type="submit">Add Task</button>
          </form>
        </div>
      )}
    </>
  );
};

AddTask.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  setIsFormOpen: PropTypes.func.isRequired,
};

export default AddTask;
