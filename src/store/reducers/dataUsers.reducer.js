import { DATA_USERS } from '../actions/dataUsers.actions';

const initialState = {
  dataUsers: [],
};

export const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS: {
      return {
        ...state,
        dataUsers: action.payload.data,
      };
    }
    default:
      return state;
  }
};
