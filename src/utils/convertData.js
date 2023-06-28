export const isoInIsoPlusOneDay = date => {
  const currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + 1);
  const result = currentDate.toISOString();
  return result;
};

const convertDate = date => {
  const dateData = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const locale = 'uk-UA';
  // const locale = navigator.language;
  const intlDate = new Intl.DateTimeFormat(locale, options).format(dateData);

  let parts;
  if (intlDate.includes('.')) {
    parts = intlDate.split('.');
  } else {
    parts = intlDate.split('/');
  }
  console.log(parts);
  const correctFormat = `${parts[0]}.${parts[1]}.${parts[2].padStart(4, '0')}`;
  return correctFormat;
};

export const setConvertedArrData = data => {
  if (!data || data === []) return null;
  const convertedArr = data.map(obj => ({
    ...obj,
    lastLoginAt: convertDate(obj.createdAt),
    createdAt: convertDate(obj.createdAt),
    hireDate: convertDate(obj.hireDate),
    dateOfBirth: convertDate(obj.dateOfBirth),
    blocked: obj.blocked + '',
  }));
  return convertedArr;
};

// export const convertExpiredTime = isoDate => {
//   const date = new Date(isoDate);
// };
