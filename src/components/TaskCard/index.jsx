import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from "@components/Button";
import { deleteTask } from "@store/actions";
import { ICON_DELETE } from "@utils/constants/icons";
import { ALT_TEXT_DELETE_ICON } from "@utils/constants/texts";
import { formatDate } from "@utils/helpers/formatDate";
import "./index.scss"

const TaskCard = ({ task }) => {
  const { id, title, createdDate } = task;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-card">
      <p className="task-card__title">{title}</p>
      <p>Created At: {formatDate(createdDate)}</p>
      <Button
        onClick={handleDelete}
        alt={ALT_TEXT_DELETE_ICON}
        src={ICON_DELETE}
      />
    </div >
  )
};

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdDate: PropTypes.instanceOf(Date).isRequired,
  }),
};

export default TaskCard;
