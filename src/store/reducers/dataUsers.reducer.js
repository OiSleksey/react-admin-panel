import {
  DATA_USERS,
  CHANGE_DATA_USER_ID,
  DISPLAY_DATA_USERS,
  SHOW_ALL_USERS,
  ACTIVE_BTN_DISPLAY,
} from '../actions/dataUsers.actions';

const initialState = {
  arrAllUsers: null,
  changeUserData: null,
  displayDataUsers: null,
  showAllUsers: true,
  prevActiveBtnDisplay: null,
  activeBtnDisplay: 'allUsers',
};

export const dataUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_USERS: {
      return {
        ...state,
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
    case DISPLAY_DATA_USERS: {
      // const searchId = action.payload.data;
      // const arrAllUsers = state.arrAllUsers;
      // const changeUserData = arrAllUsers.find(value => value.id === searchId);
      // console.log(changeUserData);
      return {
        ...state,
        displayDataUsers: action.payload.data,
      };
    }
    case SHOW_ALL_USERS: {
      // console.log(changeUserData);
      return {
        ...state,
        showAllUsers: action.payload.data,
      };
    }
    case ACTIVE_BTN_DISPLAY: {
      // console.log(changeUserData);
      const prevValue = state.activeBtnDisplay;
      return {
        ...state,
        prevActiveBtnDisplay: prevValue,
        activeBtnDisplay: action.payload.data,
      };
    }
    default:
      return state;
  }
};
