import {
  LOGGED_IN,
  SERVER_WORK,
  INCORRECT_FUNCTION,
  ERROR_ANSWER,
  POSITIVE_ANSWER,
  ACTIVE_PANEL,
  SET_THEME_MODE,
  OPEN_MODAL_WINDOW,
  TYPE_MODAL_WINDOW,
  BACK_DROP_LOADING,
} from '../actions/ui.actions';

const initialState = {
  loggedIn: false,
  serverWork: true,
  errorAnswer: null,
  positiveAnswer: null,
  incorrectFunction: null,
  activePanel: 'login',
  themeMode: 'dark',
  openModalWindow: false,
  typeModalWindow: 'changeUserData',
  backDropLoading: false,
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
    case SET_THEME_MODE: {
      return {
        ...state,
        themeMode: action.payload.data,
      };
    }
    case OPEN_MODAL_WINDOW: {
      return {
        ...state,
        openModalWindow: action.payload.data,
      };
    }
    case TYPE_MODAL_WINDOW: {
      return {
        ...state,
        typeModalWindow: action.payload.data,
      };
    }
    case BACK_DROP_LOADING: {
      return {
        ...state,
        backDropLoading: action.payload.data,
      };
    }
    default:
      return state;
  }
};
