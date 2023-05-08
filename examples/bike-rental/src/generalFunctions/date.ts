export const getDiffByHours = (dateStart: Date, dateEnd: Date): number => {
  const start: number = dateStart.getTime();
  const end: number = dateEnd.getTime();
  const diff: number = end - start;
  // convert miliseconds to days
  return diff / (1000 * 60 * 60 * 24);
};

export const formatDate = (date: string): Date => {
  const currentDate = new Date(date);
  currentDate.setMinutes(
    currentDate.getMinutes() + currentDate.getTimezoneOffset()
  );
  return currentDate;
};
