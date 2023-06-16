export const LOGGED_IN = 'LOGGED_IN';
export const SERVER_WORK = 'SERVER_WORK';
export const INCORRECT_FUNCTION = 'INCORRECT_FUNCTION';
export const ERROR_ANSWER = 'ERROR_ANSWER';
export const POSITIVE_ANSWER = 'POSITIVE_ANSWER';

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

export const incorrectFunction = data => {
  return {
    type: INCORRECT_FUNCTION,
    payload: {
      data,
    },
  };
};
export const errorMessage = data => {
  return {
    type: ERROR_ANSWER,
    payload: {
      data,
    },
  };
};
export const positiveMessage = data => {
  return {
    type: POSITIVE_ANSWER,
    payload: {
      data,
    },
  };
};
