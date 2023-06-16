import { TOKEN_AUTH, REMEBER_TOKEN } from '../actions/authorization.actions';

const initialState = {
  code: null,
  beAuthorized: true,
};

export const authorizationReducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};
