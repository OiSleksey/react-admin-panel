export const LOGGED_IN = 'LOGGED_IN';
export const SERVER_WORK = 'SERVER_WORK';
export const INCORRECT_FUNCTION = 'INCORRECT_FUNCTION';
export const ERROR_ANSWER = 'ERROR_ANSWER';
export const POSITIVE_ANSWER = 'POSITIVE_ANSWER';
export const ACTIVE_PANEL = 'ACTIVE_PANEL';
export const SET_THEME_MODE = 'SET_THEME_MODE';
export const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
export const TYPE_MODAL_WINDOW = 'TYPE_MODAL_WINDOW';
export const BACK_DROP_LOADING = 'BACK_DROP_LOADING';
export const FAKE_SERVER = 'FAKE_SERVER';
export const STATE_PROGRESS = 'STATE_PROGRESS';

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

export const typeModalWindow = data => {
  return {
    type: TYPE_MODAL_WINDOW,
    payload: {
      data,
    },
  };
};
export const backDropLoading = data => {
  return {
    type: BACK_DROP_LOADING,
    payload: {
      data,
    },
  };
};
export const fakeServer = data => {
  return {
    type: FAKE_SERVER,
    payload: {
      data,
    },
  };
};
export const stateProgress = data => {
  return {
    type: STATE_PROGRESS,
    payload: {
      data,
    },
  };
};
