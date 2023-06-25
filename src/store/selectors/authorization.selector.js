import { convertExpiredTime } from '../../utils/convertData';

export const getToken = state => {
  if (!state || !state.authorization || !state.authorization.code) return null;
  const token = state.authorization.code;
  return token;
};

export const getName = state => {
  if (!state || !state.authorization || !state.authorization.name) return null;
  const name = state.authorization.name;
  return name;
};

export const getExpiredTime = state => {
  if (!state || !state.authorization || !state.authorization.expiredTime)
    return null;
  const expiredTime = state.authorization.expiredTime;
  const convertDate = convertExpiredTime(expiredTime);

  return expiredTime;
};

export const getRole = state => {
  if (!state || !state.authorization || !state.authorization.role) return null;
  const role = state.authorization.role;
  return role;
};
