export const getAllUsersArr = state => {
  if (!state || !state.dataUsers || !state.dataUsers.arrAllUsers) return null;
  const arrAllUsers = state.dataUsers.arrAllUsers;
  return arrAllUsers;
};
