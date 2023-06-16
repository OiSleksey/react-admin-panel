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
