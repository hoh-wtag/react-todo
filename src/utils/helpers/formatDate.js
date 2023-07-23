export const formatDate = (date) => {
  const year = date.getFullYear().toString().slice(-2);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedMonth = month.toString().padStart(2, '0');
  const formattedDay = day.toString().padStart(2, '0');

  return `${formattedDay}.${formattedMonth}.${year}`;
};
