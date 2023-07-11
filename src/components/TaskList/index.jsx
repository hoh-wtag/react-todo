import { connect } from 'react-redux';
import TaskCard from '../TaskCard';
import PropTypes from 'prop-types';

import "./index.scss"

const TaskList = ({ tasks }) => {
    return (
        <div className='task-list'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default connect(mapStateToProps)(TaskList);
