export const FILTER_SWITCH_STATE = 'FILTER_SWITCH_STATE';
export const ACTIVE_BTN_DISPLAY = 'ACTIVE_BTN_DISPLAY';
export const VALUE_SEARCH = 'VALUE_SEARCH,';

export const filterSwitchState = (key, value) => {
  return {
    type: FILTER_SWITCH_STATE,
    payload: {
      key,
      value,
    },
  };
};

export const activeBtnDisplay = data => {
  return {
    type: ACTIVE_BTN_DISPLAY,
    payload: {
      data,
    },
  };
};
export const valueSearch = data => {
  return {
    type: VALUE_SEARCH,
    payload: {
      data,
    },
  };
};
