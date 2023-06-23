export const DATA_USERS = 'DATA_USERS';
export const CHANGE_DATA_USER_ID = 'CHANGE_DATA_USER_ID';
export const DISPLAY_DATA_USERS = 'DISPLAY_DATA_USERS';
// export const SHOW_ALL_USERS = 'SHOW_ALL_USERS';
// export const ACTIVE_BTN_DISPLAY = 'ACTIVE_BTN_DISPLAY';

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
export const displayDataUsers = data => {
  return {
    type: DISPLAY_DATA_USERS,
    payload: {
      data,
    },
  };
};
// export const showAllUsers = data => {
//   return {
//     type: SHOW_ALL_USERS,
//     payload: {
//       data,
//     },
//   };
// };
// export const activeBtnDisplay = data => {
//   return {
//     type: ACTIVE_BTN_DISPLAY,
//     payload: {
//       data,
//     },
//   };
// };
