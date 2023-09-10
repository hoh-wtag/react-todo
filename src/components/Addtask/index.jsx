import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "@store/actions";
import { sanitizeText } from "@utils/helpers/sanitizeText";
import {
  PLACEHOLDER_TEXT_ADD_TASK,
  ALT_TEXT_DELETE_ICON,
} from "@utils/constants/texts.js";
import IconButton from "@components/IconButton";
import TextButton from "@components/TextButton";
import { displayToastNotification } from "@utils/helpers/displayToastNotification";
import { ICON_DELETE } from "@utils/constants/icons";
import "./index.scss";

const AddTask = ({ setIsFormOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const sanitizedTitle = sanitizeText(title);
    if (sanitizedTitle === "") {
      displayToastNotification("Invalid Title", "error");
      return;
    }
    dispatch(addTask(sanitizedTitle));
    setTitle("");
    handleCloseForm();
    displayToastNotification("Task Added", "success");
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  function handleChangeText(event) {
    setTitle(event.target.value);
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
        <div className="task-card__bottom">
          <div className="task-card__button-container">
            <TextButton buttonText={"Add Task"} />
            <IconButton
              onClick={handleCloseForm}
              alt={ALT_TEXT_DELETE_ICON}
              src={ICON_DELETE}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

AddTask.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};

export default AddTask;
