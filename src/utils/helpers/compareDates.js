import { MILLI_SECONDS_IN_A_DAY } from "/src/utils/constants/values";

export const getDaysToCompleteTask = (startDate, endDate) => {
  const millisecondsInADay = MILLI_SECONDS_IN_A_DAY;
  const diffInMilliseconds = endDate - startDate;
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;

  const daysStr = diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`;

  return daysStr;
};
