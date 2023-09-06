export const searchTasks = (tasks, searchQuery) => {
  const searchedTasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(searchQuery.toLowerCase());
  });
  return searchedTasks;
};
