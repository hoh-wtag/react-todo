import { MILLI_SECONDS_IN_A_DAY } from "@utils/constants/values";

export const compareDates = (startDate, endDate) => {
  if (!startDate || !endDate) {
    return null;
  }

  const millisecondsInADay = MILLI_SECONDS_IN_A_DAY;
  const differenceInMilliseconds  = endDate - startDate;
  const differenceInDays = Math.floor(differenceInMilliseconds  / millisecondsInADay) + 1;

  return differenceInDays;
};
