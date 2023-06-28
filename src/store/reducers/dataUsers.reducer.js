import {
  DATA_USERS,
  CHANGE_DATA_USER_ID,
  DISPLAY_DATA_USERS,
} from '../actions/dataUsers.actions';
import { setConvertedArrData } from '../../utils/convertData';

const initialState = {
  arrAllUsers: null,
  arrConvertedAllUsers: null,
  arrDisplayUsers: null,
  changeUserData: null,
};

export const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS: {
      const arrConvertedAllUsers = setConvertedArrData(action.payload.data);
      return {
        ...state,
        arrAllUsers: action.payload.data,
        arrConvertedAllUsers,
      };
    }
    case CHANGE_DATA_USER_ID: {
      const searchId = action.payload.data;
      const arrAllUsers = state.arrAllUsers;
      const changeUserData = arrAllUsers.find(value => value.id === searchId);
      return {
        ...state,
        changeUserData,
      };
    }
    case DISPLAY_DATA_USERS: {
      return {
        ...state,
        arrDisplayUsers: action.payload.data,
      };
    }
    default:
      return state;
  }
};
