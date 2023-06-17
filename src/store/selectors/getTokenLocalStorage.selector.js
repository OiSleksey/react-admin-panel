// export const getTokenLocalStorage = state => {
//   if (!state || !state.adminPanel) return null;
//   const code = state.adminPanel.code;
//   return code;
// };

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
