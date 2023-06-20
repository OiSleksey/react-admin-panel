import { DATA_USERS, CHANGE_DATA_USER_ID } from '../actions/dataUsers.actions';

const initialState = [];

export const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS: {
      return {
        arrAllUsers: action.payload.data,
      };
    }
    case CHANGE_DATA_USER_ID: {
      const searchId = action.payload.data;
      const arrAllUsers = state.arrAllUsers;
      const changeUserData = arrAllUsers.find(value => value.id === searchId);
      // console.log(changeUserData);
      return {
        ...state,
        changeUserData,
      };
    }
    default:
      return state;
  }
};
