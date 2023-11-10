export const addDays = (date: Date, numberOfDays: number) => {
  const newDate = new Date(date);

  newDate.setDate(date.getDate() + numberOfDays);

  return newDate;
};
