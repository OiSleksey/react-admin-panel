import {
  TOKEN_AUTH,
  REMEBER_TOKEN,
  LOGGED_IN,
  SERVER_WORK,
  WRONG_GET_TOKEN_CODE,
} from '../actions/requestsServer.actions';

const initialState = {
  code: null,
  beAuthorized: true,
  loggedIn: false,
  serverWork: true,
  wrongGetTokenCode: false,
};

export const requestsServer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_AUTH: {
      return {
        ...state,
        code: action.payload.data,
      };
    }
    case REMEBER_TOKEN: {
      return {
        ...state,
        beAuthorized: action.payload.data,
      };
    }
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
    case WRONG_GET_TOKEN_CODE: {
      return {
        ...state,
        wrongGetTokenCode: action.payload.data,
      };
    }
    default:
      return state;
  }
};
