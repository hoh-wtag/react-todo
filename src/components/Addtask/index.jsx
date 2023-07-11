import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../store/actions';
import "./index.scss"

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    addTask(title);
    setTitle('');
    setIsFormOpen(false);
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div>
      <button onClick={toggleForm}>
        {isFormOpen ? 'Close Form' : 'Open Form'}
      </button>
      {isFormOpen && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      )}
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTask);
