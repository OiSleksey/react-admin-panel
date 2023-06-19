export const LOGGED_IN = 'LOGGED_IN';
export const SERVER_WORK = 'SERVER_WORK';
export const INCORRECT_FUNCTION = 'INCORRECT_FUNCTION';
export const ERROR_ANSWER = 'ERROR_ANSWER';
export const POSITIVE_ANSWER = 'POSITIVE_ANSWER';
export const ACTIVE_PANEL = 'ACTIVE_PANEL';
export const SET_THEME_MODE = 'SET_THEME_MODE';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';

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
export const activePanel = data => {
  return {
    type: ACTIVE_PANEL,
    payload: {
      data,
    },
  };
};
export const setThemeMode = data => {
  return {
    type: SET_THEME_MODE,
    payload: {
      data,
    },
  };
};

export const openModalWindow = data => {
  return {
    type: OPEN_MODAL_WINDOW,
    payload: {
      data,
    },
  };
};
