export const addTask = (title) => ({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    title: title,
    createdDate: new Date(),
  },
});

export const deleteTask = (taskId) => ({
  type: "DELETE_TASK",
  payload: taskId,
});
