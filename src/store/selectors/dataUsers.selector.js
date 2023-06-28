//Correct arrAllUsers
export const getArrAllUsers = state => {
  if (
    !state ||
    !state.dataUsers ||
    !state.dataUsers.arrAllUsers ||
    state.dataUsers.arrAllUsers === []
  )
    return null;
  const arrAllUsers = state.dataUsers.arrAllUsers;
  return arrAllUsers;
};

//Correct arrConvertedAllUsers
export const getArrConvertedAllUsers = state => {
  if (
    !state ||
    !state.dataUsers ||
    !state.dataUsers.arrConvertedAllUsers ||
    state.dataUsers.arrConvertedAllUsers === []
  )
    return null;
  const arrConvertedAllUsers = state.dataUsers.arrConvertedAllUsers;
  return arrConvertedAllUsers;
};

//Correct arrDisplayUsers
export const getArrDisplayUsers = state => {
  if (
    !state ||
    !state.dataUsers ||
    !state.dataUsers.arrDisplayUsers ||
    state.dataUsers.arrDisplayUsers === []
  )
    return null;
  const arrDisplayUsers = state.dataUsers.arrDisplayUsers;
  return arrDisplayUsers;
};

//Correct changeUserData
export const getChangeUserDataObj = state => {
  if (!state || !state.dataUsers || !state.dataUsers.changeUserData)
    return null;
  const changeUserData = state.dataUsers.changeUserData;
  return changeUserData;
};

// export const getAllUsersArr = state => {
//   if (!state || !state.dataUsers || !state.dataUsers.arrAllUsers) return null;
//   const arrAllUsers = state.dataUsers.arrAllUsers;
//   return arrAllUsers;
// };

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
