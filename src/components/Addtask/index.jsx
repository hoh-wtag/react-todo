import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addTask } from '../../store/actions';
import './index.scss';

const AddTask = ({ isFormOpen, setIsFormOpen }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTask(title));
    setTitle('');
    setIsFormOpen(false);
  };

  return (
    <>
      {isFormOpen && (
        <div className="task-card">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add a task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
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
