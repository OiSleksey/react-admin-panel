import {
  LOGGED_IN,
  SERVER_WORK,
  INCORRECT_FUNCTION,
  ERROR_ANSWER,
  POSITIVE_ANSWER,
  ACTIVE_PANEL,
} from '../actions/ui.actions';

const initialState = {
  loggedIn: false,
  serverWork: true,
  errorAnswer: null,
  positiveAnswer: null,
  incorrectFunction: null,
  activePanel: 'users',
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: {
      return {
        ...state,
        loggedIn: action.payload.data,
      };
    }
    case SERVER_WORK: {
      return {
        ...state,
        serverWork: action.payload.data,
      };
    }
    case INCORRECT_FUNCTION: {
      return {
        ...state,
        incorrectFunction: action.payload.data,
      };
    }
    case ERROR_ANSWER: {
      return {
        ...state,
        errorAnswer: action.payload.data,
      };
    }
    case POSITIVE_ANSWER: {
      return {
        ...state,
        positiveAnswer: action.payload.data,
      };
    }
    case ACTIVE_PANEL: {
      return {
        ...state,
        activePanel: action.payload.data,
      };
    }
    default:
      return state;
  }
};
