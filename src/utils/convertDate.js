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
  const locale = navigator.language;
  const intlDate = new Intl.DateTimeFormat(locale, options).format(dateData);
  const parts = intlDate.split('.');
  const correctFormat = `${parts[0]}.${parts[1]}.${parts[2].padStart(4, '0')}`;
  return correctFormat;
};

const convertDateMui = date => {
  const parts = date.split('.');
  const dateForMui = `${parts[2]}-${parts[1]}-${parts[0]}`;
  return dateForMui;
};

const convertIsoMui = date => {
  const displayDate = convertDate(date);
  const muiDate = convertDateMui(displayDate);
  return muiDate;
};

export const getAllUsersArr = state => {
  if (!state || !state.dataUsers || !state.dataUsers.arrAllUsers) return null;
  const arrAllUsers = state.dataUsers.arrAllUsers;
  return arrAllUsers;
};

export const convertAllUsersArr = state => {
  if (!state || !state.dataUsers || !state.dataUsers.displayDataUsers)
    return null;
  const inputArrUsers = state.dataUsers.displayDataUsers;
  const outputArrUsers = inputArrUsers.map((obj, index) => {
    const readyObject = {
      ...obj,
      createdAt: convertDate(obj.createdAt),
      hireDate: convertDate(obj.hireDate),
      dateOfBirth: convertDate(obj.dateOfBirth),
      lastLoginAt: convertDate(obj.lastLoginAt),
      blocked: obj.blocked + '',
    };
    return readyObject;
  });
  return outputArrUsers;
};

export const getChangeUserDataObj = state => {
  if (!state || !state.dataUsers || !state.dataUsers.changeUserData)
    return null;
  const changeUserData = state.dataUsers.changeUserData;
  const correctDataUser = {
    ...changeUserData,
    dateOfBirth: convertIsoMui(changeUserData.dateOfBirth),
    hireDate: convertIsoMui(changeUserData.hireDate),
  };
  return changeUserData;
};
