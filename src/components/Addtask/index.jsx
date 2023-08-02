import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "/src/store/actions";
import { sanitizeText } from "/src/utils/helpers/sanitizeText"
import { PLACEHOLDER_TEXT_ADD_TASK } from "/src/utils/constants/placeholders.js";
import "./index.scss";

const AddTask = ({ isFormOpen, setIsFormOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const sanitizedTitle = sanitizeText(title);
    if (sanitizedTitle === "") {
      setError("Invalid Text");
      return;
    }
    dispatch(addTask(sanitizedTitle));
    setTitle("");
    setIsFormOpen(false);
  };

  function handleChangeText(event) {
    setTitle(event.target.value)
  }

  return (
    <>
      {isFormOpen && (
        <div className="task-form">
          <form onSubmit={handleSubmit}>
            <textarea
              className="task-form__textarea"
              type="text"
              placeholder={PLACEHOLDER_TEXT_ADD_TASK}
              value={title}
              onChange={handleChangeText}
            />
            {error && <small className="task-form__error">{error}</small>}
            <button>Add Task</button>
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
