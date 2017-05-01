export const generateDateString = (date) =>
{
  let year = date.getFullYear();
  let month = (parseInt(date.getMonth()) + 1)
    if(month < 10) {
      month = month.toString();
      month = `0${month}`;
    }
  let day = date.getDate();
    if(day < 10) {
      day = day.toString();
      day = `0${day}`;
    }

  return `${year}-${month}-${day}`;
};
