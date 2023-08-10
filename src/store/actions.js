import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_TASK_DONE,
  EDIT_TASK,
} from "@store/types";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now().toString(),
    title: title,
    createdDate: new Date(),
    completedDate: null,
    done: false,
  },
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const toggleTaskDone = (taskId) => ({
  type: TOGGLE_TASK_DONE,
  payload: taskId,
});

export const editTask = (taskId, newTitle) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    newTitle,
  },
});
