export const DATA_USERS = 'DATA_USERS';
export const CHANGE_DATA_USER_ID = 'CHANGE_DATA_USER_ID';

export const dataUsers = data => {
  return {
    type: DATA_USERS,
    payload: {
      data,
    },
  };
};
export const сhangeDataUserId = data => {
  return {
    type: CHANGE_DATA_USER_ID,
    payload: {
      data,
    },
  };
};
