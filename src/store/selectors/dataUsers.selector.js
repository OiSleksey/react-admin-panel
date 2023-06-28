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
