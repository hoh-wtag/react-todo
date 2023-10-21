import { COMPLETED_TASKS, INCOMPLETED_TASKS } from "@utils/constants/texts";

export const filterTasks = (tasks, filter) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === COMPLETED_TASKS) return task.isDone;
    if (filter === INCOMPLETED_TASKS) return !task.isDone;
    return true;
  });

  return filteredTasks;
};
