import { ADD_TASK, DELETE_TASK, SET_TASK_DONE, EDIT_TASK } from "@store/types";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    title: title,
    createdDate: new Date(),
    completedDate: null,
    isDone: false,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const setTaskDone = (taskId) => ({
  type: SET_TASK_DONE,
  payload: taskId,
});

export const editTask = (taskId, newTitle) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    newTitle,
  },
});
