export const CHAT_HEIGHT = 'CHAT_HEIGHT';
export const ACCORDION_HEIGHT = 'ACCORDION_HEIGHT';
export const INPUT_HEIGHT = 'INPUT_HEIGHT';

export const chatHeight = data => {
  return {
    type: CHAT_HEIGHT,
    payload: {
      data,
    },
  };
};

export const accordionHeight = data => {
  return {
    type: ACCORDION_HEIGHT,
    payload: {
      data,
    },
  };
};

export const inputHeight = data => {
  return {
    type: INPUT_HEIGHT,
    payload: {
      data,
    },
  };
};
