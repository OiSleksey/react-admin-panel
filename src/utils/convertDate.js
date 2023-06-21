export const isoInIsoPlusOneDay = date => {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + 1);
  const result = currentDate.toISOString();
  return result;
};
