export const FILTER_SWITCH_STATE = 'FILTER_SWITCH_STATE';

export const filterSwitchState = (key, value) => {
  return {
    type: FILTER_SWITCH_STATE,
    payload: {
      key,
      value,
    },
  };
};
