import { DATA_USERS } from '../actions/dataUsers.actions';

const initialState = [];

export const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS: {
      return {
        arrAllUsers: action.payload.data,
      };
    }
    default:
      return state;
  }
};
