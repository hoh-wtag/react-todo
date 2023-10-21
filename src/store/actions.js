import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK } from "@store/types";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    title: title,
    createdDate: new Date(),
    completedDate: null,
    isTaskDone: false,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const editTask = (taskId, newTitle) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    newTitle,
  },
});
