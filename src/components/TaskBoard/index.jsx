import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskList from "@components/TaskList";
import AddTask from "@components/Addtask";
import { MAX_TASK_PER_PAGE } from "@utils/constants/values";
import { ICON_EMPTY_PAGE } from "@utils/constants/icons";

import {
  ALL_TASKS,
  COMPLETED_TASKS,
  INCOMPLETED_TASKS,
  ALT_TEXT_EMPTY_PAE_ICON,
} from "@utils/constants/texts";
import TextButton from "@components/TextButton";
import "./index.scss";

const TaskBoard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [visibleTaskRange, setVisibleTaskRange] = useState(MAX_TASK_PER_PAGE);
  const [filter, setFilter] = useState(ALL_TASKS);
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
      <h1 className="task-board--title">Add Task</h1>
      <div className="top-bar">
        <TextButton buttonText={"+ Create"} onClick={handleOpenForm} />
        <div className="top-bar__filter-bar">
          <div
            className={`${
              filter === ALL_TASKS
                ? "top-bar__filter-bar__button-active"
                : "top-bar__filter-bar__button-inactive"
            }`}
          >
            <TextButton
              buttonText={"All"}
              onClick={() => setFilter(ALL_TASKS)}
            />
          </div>
          <div
            className={`${
              filter === COMPLETED_TASKS
                ? "top-bar__filter-bar__button-active"
                : "top-bar__filter-bar__button-inactive"
            }`}
          >
            <TextButton
              buttonText={"Completed"}
              onClick={() => setFilter(COMPLETED_TASKS)}
            />
          </div>
          <div
            className={`${
              filter === INCOMPLETED_TASKS
                ? "top-bar__filter-bar__button-active"
                : "top-bar__filter-bar__button-inactive"
            }`}
          >
            <TextButton
              buttonText={"Incompleted"}
              onClick={() => setFilter(INCOMPLETED_TASKS)}
            />
          </div>
        </div>
      </div>

      <div className="task-board__container">
        {tasks.length === 0 && (
          <div className="empty-page">
            <div className="empty-page__container">
              <img
                className="empty-page__container--icon"
                onClick={handleOpenForm}
                src={ICON_EMPTY_PAGE}
                alt={ALT_TEXT_EMPTY_PAE_ICON}
              />
              <h1 className="empty-page__container--text">
                You didn't add any task. Please, add one.
              </h1>
            </div>
          </div>
        )}
        {isFormOpen && (
          <AddTask isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        )}
        <TaskList
          tasks={tasks}
          visibleTaskRange={visibleTaskRange}
          isFormOpen={isFormOpen}
          filter={filter}
        />
      </div>
      <div className="pagination__container">
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
