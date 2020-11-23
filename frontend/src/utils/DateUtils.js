export const getDate = (num) => {
  const newDate = new Date();
  newDate.setDate(new Date().getDate() + num);
  const date = newDate.toISOString().slice(0, 10);
  return date;
};
