const convertDate = date => {
  const dateData = new Date(date);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };
  const locale = navigator.language;
  const intlDate = new Intl.DateTimeFormat(locale, options).format(dateData);
  // console.log(new Date(date));
  return intlDate;
};

export const getAllUsersArr = state => {
  if (!state || !state.dataUsers || !state.dataUsers.arrAllUsers) return null;
  const inputArrUsers = state.dataUsers.arrAllUsers;
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
