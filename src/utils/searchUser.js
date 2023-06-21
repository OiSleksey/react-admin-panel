export const getSearchUser = (arrAllUsers, valueSearch) => {
  const filterUserData = arrAllUsers.filter(value => value.id == valueSearch);
  console.log(filterUserData);
  return filterUserData;
};
