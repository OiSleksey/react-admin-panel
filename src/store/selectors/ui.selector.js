export const getThemeMode = state => {
  if (!state || !state.ui || state.ui.themeMode === undefined) return 'dark';
  const themeMode = state.ui.themeMode;
  return themeMode;
};
