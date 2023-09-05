export const formatDate = (date) => {
  const format = "2-digit";

  const dateFormatOptions = {
    year: format,
    month: format,
    day: format,
  };

  return new Intl.DateTimeFormat("de", dateFormatOptions).format(date);
};
