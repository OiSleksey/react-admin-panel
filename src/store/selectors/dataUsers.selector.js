const convertDate = date => {
  const dateData = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const locale = navigator.language;
  const intlDate = new Intl.DateTimeFormat(locale, options).format(dateData);
  // console.log(new Date(date));
  const parts = intlDate.split('.');
  const correctFormat = `${parts[0]}.${parts[1]}.${parts[2].padStart(4, '0')}`;
  return correctFormat;
};

const convertDateMui = date => {
  // console.log(date); // Виведе: '2022-07-17'
  const parts = date.split('.');
  // console.log(parts);
  const dateForMui = `${parts[2]}-${parts[1]}-${parts[0]}`;
  // console.log(dateForMui); // Виведе: '2022-07-17'
  return dateForMui;
};

const convertIsoMui = date => {
  const displayDate = convertDate(date);
  // console.log(displayDate);
  const muiDate = convertDateMui(displayDate);
  // console.log(muiDate);
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
  // console.log(changeUserData.dateOfBirth);
  const correctDataUser = {
    ...changeUserData,
    dateOfBirth: convertIsoMui(changeUserData.dateOfBirth),
    hireDate: convertIsoMui(changeUserData.hireDate),
  };
  // const inputChangeUserData = state.dataUsers.changeUserData;
  // const isoDate = inputChangeUserData.dateOfBirth;
  // const displayDate = convertDate(isoDate);
  // const muiDate = convertDateMui(displayDate);
  // convertIsoMui;
  // // const
  // console.log(correctDataUser);
  // const outputArrUsers = inputArrUsers.map((obj, index) => {
  //   const readyObject = {
  //     ...obj,
  //     createdAt: convertDate(obj.createdAt),
  //     hireDate: convertDate(obj.hireDate),
  //     dateOfBirth: convertDate(obj.dateOfBirth),
  //     lastLoginAt: convertDate(obj.lastLoginAt),
  //     blocked: obj.blocked + '',
  //   };
  //   return readyObject;
  // });
  // return outputArrUsers;
  return changeUserData;
};

// const createDataUser = (data, i) => {
//   const dataUsers = {
//     id: data[i].id,
//     name: data[i].name,
//     role: data[i].role,
//     email: data[i].email,
//     phone: data[i].phone,
//     homePhone: data[i].homePhone,
//     dateOfBirth: convertDate(data[i].dateOfBirth),
//     blocked: data[i].blocked,
//     createdAt: convertDate(data[i].createdAt),
//     lastLoginAt: convertDate(data[i].lastLoginAt),
//     hireDate: convertDate(data[i].hireDate),
//     roleId: data[i].roleId,
//   };
//   return dataUsers;
// };
