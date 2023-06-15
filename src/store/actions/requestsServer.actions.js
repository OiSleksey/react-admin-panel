export const TOKEN_AUTH = 'TOKEN_AUTH';
export const REMEBER_TOKEN = 'REMEBER_TOKEN';
export const LOGGED_IN = 'LOGGED_IN';
export const SERVER_WORK = 'SERVER_WORK';
export const WRONG_GET_TOKEN_CODE = 'WRONG_GET_TOKEN_CODE';

export const tokenAuth = data => {
  return {
    type: TOKEN_AUTH,
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

export const loggedIn = data => {
  return {
    type: LOGGED_IN,
    payload: {
      data,
    },
  };
};

export const serverWork = data => {
  return {
    type: SERVER_WORK,
    payload: {
      data,
    },
  };
};

export const wrongGetTokenCode = data => {
  return {
    type: WRONG_GET_TOKEN_CODE,
    payload: {
      data,
    },
  };
};
