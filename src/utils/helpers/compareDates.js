import { MILLI_SECONDS_IN_A_DAY } from "@utils/constants/values";

export const compareDates = (startDate, endDate) => {
  const millisecondsInADay = MILLI_SECONDS_IN_A_DAY;
  const diffInMilliseconds = endDate - startDate;
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;

  return diffInDays;
};
