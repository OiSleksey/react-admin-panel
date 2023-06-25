import { AUTH_DATA, REMEBER_TOKEN } from '../actions/authorization.actions';

const initialState = {
  code: null,
  name: null,
  expiredTime: null,
  role: null,
  beAuthorized: true,
};

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_DATA: {
      const data = action.payload.data;
      // console.log(data);
      if (!data)
        return {
          beAuthorized: true,
        };
      return {
        ...state,
        code: data.code,
        name: data.name,
        expiredTime: data.expiredTime,
        role: data.role,
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
