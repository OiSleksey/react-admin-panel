export const DATA_USERS = 'DATA_USERS';

export const dataUsers = data => {
  return {
    type: DATA_USERS,
    payload: {
      data,
    },
  };
};
