export const getLoggedIn = state => {
  if (!state || !state.ui || state.ui.loggedIn === undefined) return null;

  const loggedIn = state.ui.loggedIn;
  return loggedIn;
};

export const setPropsSnake = state => {
  if (!state || !state.ui || state.ui.positiveAnswer === state.ui.errorAnswer)
    return null;
  if (state.ui.positiveAnswer) {
    const typeSnake = 'success';
    const message = state.ui.positiveAnswer;
    const propsSnake = {
      typeSnake,
      message,
    };
    // console.log(propsSnake);
    return propsSnake;
  }

  if (state.ui.errorAnswer) {
    const typeSnake = 'error';
    const message = state.ui.errorAnswer;
    const propsSnake = {
      typeSnake,
      message,
    };
    // console.log(propsSnake);
    return propsSnake;
  }
  return null;
};

export const getActivePanel = state => {
  if (!state || !state.ui || !state.ui.activePanel) return null;
  const activePanel = state.ui.activePanel;
  return activePanel;
};

export const getThemeMode = state => {
  if (!state || !state.ui || state.ui.themeMode === undefined) return 'dark';
  const themeMode = state.ui.themeMode;
  return themeMode;
};

export const getOpenModalWindow = state => {
  if (!state || !state.ui || !state.ui.openModalWindow) return null;
  const openModalWindow = state.ui.openModalWindow;
  return openModalWindow;
};

export const getTypeModalWindow = state => {
  if (!state || !state.ui || !state.ui.typeModalWindow) return null;
  const typeModalWindow = state.ui.typeModalWindow;
  return typeModalWindow;
};

export const getBackDropLoading = state => {
  if (!state || !state.ui || !state.ui.backDropLoading) return false;
  const backDropLoading = state.ui.backDropLoading;
  return backDropLoading;
};
export const getIsFakeServer = state => {
  if (!state || !state.ui || !state.ui.fakeServer) return false;
  const fakeServer = state.ui.fakeServer;
  return fakeServer;
};
export const getIsProgress = state => {
  if (!state || !state.ui || !state.ui.progress) return false;
  const progress = state.ui.progress;
  return progress;
};
