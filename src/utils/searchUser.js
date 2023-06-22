export const getSearchUser = (arrAllUsers, valueSearch) => {
  // const filterUserData = arrAllUsers.filter(value => value.id == valueSearch);

  const filterUserData = arrAllUsers.filter(user => {
    for (const prop in user) {
      const stringProps = user[prop] === null ? '' : user[prop] + '';
      if (stringProps.includes(valueSearch)) {
        return true;
      }
    }
    return false;
  });
  return filterUserData;
};
