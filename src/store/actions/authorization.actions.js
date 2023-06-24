export const AUTH_DATA = 'AUTH_DATA';
export const REMEBER_TOKEN = 'REMEBER_TOKEN';

export const authData = data => {
  return {
    type: AUTH_DATA,
    payload: {
      data,
    },
  };
};

export const rememberAuthorized = data => {
  return {
    type: REMEBER_TOKEN,
    payload: {
      data,
    },
  };
};
