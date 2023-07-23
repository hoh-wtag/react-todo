export const addTask = (title) => ({
  type: "ADD_TASK",
  payload: {
    id: Date.now(),
    title,
    createdDate: new Date(),
  },
});
