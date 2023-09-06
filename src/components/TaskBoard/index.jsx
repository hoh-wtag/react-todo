import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskList from "@components/TaskList";
import AddTask from "@components/Addtask";
import { MAX_TASK_PER_PAGE } from "@utils/constants/values";
import TextButton from "@components/TextButton";
import "./index.scss"

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [visibleTaskRange, setVisibleTaskRange] = useState(MAX_TASK_PER_PAGE);
  const tasks = useSelector((state) => state.tasks);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const totalTasks = tasks.length;
  let numberOfTasksOnScreen = totalTasks;

  if (isFormOpen) {
    numberOfTasksOnScreen += 1;
  }

  const isLoadMore =
    numberOfTasksOnScreen > MAX_TASK_PER_PAGE && visibleTaskRange <= totalTasks;
  const isLoadLess =
    visibleTaskRange >= totalTasks && totalTasks > MAX_TASK_PER_PAGE;

  function showMoreTasks() {
    setVisibleTaskRange((prevValue) => prevValue + MAX_TASK_PER_PAGE);
  }

  function showLessTasks() {
    setVisibleTaskRange(MAX_TASK_PER_PAGE);
  }

  useEffect(() => {
    if (numberOfTasksOnScreen <= MAX_TASK_PER_PAGE) {
      showLessTasks();
    }
  }, [numberOfTasksOnScreen]);

  return (
    <div className="task-board">
      <div className="task-board__create-button-container margin-bottom">
        <TextButton
          buttonText={"+ Create"}
          onClick={handleOpenForm}
        />
      </div>

      <div className="task-board__content flex wrap">
        {isFormOpen && (
          <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        )}
        <TaskList
          tasks={tasks}
          visibleTaskRange={visibleTaskRange}
          isFormOpen={isFormOpen}
        />
      </div>
      <div>
        {isLoadMore && (
          <TextButton buttonText={"Load More"} onClick={showMoreTasks} />
        )}
        {isLoadLess && (
          <TextButton buttonText={"Load Less"} onClick={showLessTasks} />
        )}
      </div>
    </div>
  );
};

export default TaskBoard;
