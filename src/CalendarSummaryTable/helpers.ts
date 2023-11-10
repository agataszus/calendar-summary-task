const parseDateItem = (item: number) => {
  return item.toString().padStart(2, "0");
};

export const parseDate = (date: Date) => {
  const day = parseDateItem(date.getDate());
  const month = parseDateItem(date.getMonth());
  const year = date.getFullYear();

  const parsedDate = `${year}-${month}-${day}`;

  return parsedDate;
};
