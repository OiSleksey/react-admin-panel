export const TOKEN_AUTH = 'TOKEN_AUTH';
export const REMEBER_TOKEN = 'REMEBER_TOKEN';

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
