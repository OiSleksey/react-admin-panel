const timeWeather = document.querySelector('.news-weather__time');
const weekdayWeather = document.querySelector('.news-weather__weekday');

//Date Today
// export const secondsInterval = setInterval(function () {
//   getDateCurrency();
// }, 1000);
export const getDateCurrency = function () {
  const dateToday = new Date();
  const isoDateToday = dateToday.toISOString();
  return isoDateToday;
  // const sevenDaysDate = [];
  // const sevenDaysMonth = [];
  // const sevenDaysWeekday = [];

  // for (let i = 0; i <= 6; i++) {
  //   const nextDate = new Date(dateToday);
  //   nextDate.setDate(dateToday.getDate() + i);
  //   sevenDaysDate.push(nextDate.getDate());
  //   sevenDaysMonth.push(nextDate.getMonth() + 1);
  //   sevenDaysWeekday.push(nextDate.getDay());
  // }

  // const minute = dateToday.getMinutes() + '';
  // const hour = dateToday.getHours() + '';
  // const day = dateToday.getDate() + '';
  // const month = dateToday.getMonth() + 1 + '';
  // const year = dateToday.getFullYear() + '';
  // const weekday = dateToday.getDay() + '';

  // const dateToday = new Date();
  // const hourToday = dateToday.getHours();
  // const dayToday = dateToday.getDate().toString().padStart(2, 0);
  // const monthToday = (dateToday.getMonth() + 1).toString().padStart(2, 0);
  // const yearToday = dateToday.getFullYear();
  // const locale = navigator.language;
  // const weekdayToday = new Intl.DateTimeFormat(locale, {
  //   weekday: 'short',
  // }).format(dateToday);

  // const timeIntl = new Intl.DateTimeFormat('ua-UA', {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   second: 'numeric',
  //   hour12: false,
  // }).format(dateToday);

  // const dateCurrency = `${weekdayToday} ${dayToday}/${monthToday}/${yearToday}`;

  // const timeAndDateCurrency = `${timeIntl} ${dateCurrency}`;
  // const dataTimes = {
  //   minute,
  //   hour,
  //   day,
  //   weekday,
  //   month,
  //   year,
  //   sevenDaysDate,
  //   sevenDaysMonth,
  //   sevenDaysWeekday,
  // };
  // console.log(dataTimes);
  // return dataTimes;
};
//Currency date for wethear
// export const dateCurrency = getDateCurrency(new Date());
//time in weather

// timeWeather.textContent = dateCurrency.substring(0, 2) + ':00';
// weekdayWeather.textContent = dateCurrency.substring(9, 12);
