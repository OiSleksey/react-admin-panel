export const getTokenLocalStorage = state => {
  if (!state || !state.adminPanel) return null;
  const code = state.adminPanel.code;
  return code;
};
