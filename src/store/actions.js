import { ADD_TASK } from "@store/types";

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    title: title,
    createdDate: new Date(),
  },
});
