export const getToken = state => {
  if (!state || !state.authorization || !state.authorization.code) return null;
  const token = state.authorization.code;
  return token;
};
