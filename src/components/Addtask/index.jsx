import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "@store/actions";
import { sanitizeText } from "@utils/helpers/sanitizeText"
import {
  PLACEHOLDER_TEXT_ADD_TASK,
  ALT_TEXT_DELETE_ICON,
} from "@utils/constants/texts.js";
import IconButton from "@components/IconButton";
import TextButton from "@components/TextButton";
import { ICON_DELETE } from "@utils/constants/icons";
import "./index.scss";

const AddTask = ({ setIsFormOpen }) => {
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
    handleCloseForm();
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  function handleChangeText(event) {
    setTitle(event.target.value)
  }

  return (
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
        <TextButton text={"Add Task"} />
      </form>
      <IconButton
        onClick={handleCloseForm}
        imageAltText={ALT_TEXT_DELETE_ICON}
        src={ICON_DELETE}
      />

    </div>
  );
};

AddTask.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

export default AddTask;
