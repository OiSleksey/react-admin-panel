export const getSearchUser = (arrAllUsers, valueSearch) => {
  const correctValue = valueSearch.toLowerCase().trim();
  // const correctValue = lowerValue.toTrim();
  // const filterUserData = arrAllUsers.filter(value => value.id == valueSearch);

  const filterUserData = arrAllUsers.filter(user => {
    for (const prop in user) {
      const stringProps = user[prop] === null ? '' : user[prop] + '';
      if (stringProps.includes(correctValue)) {
        return true;
      }
    }
    return false;
  });
  return filterUserData;
};
