export const QUESTION_FOR_CHAT = 'QUESTION_FOR_CHAT';
export const REPLY_FROM_CHAT = 'REPLY_FROM_CHAT';
export const DATE_QUESTION_FOR_CHAT = 'DATE_QUESTION_FOR_CHAT';
export const DATE_REPLY_FROM_CHAT = 'DATE_REPLY_FROM_CHAT';
export const CAN_ENTER_TEXT = 'CAN_I_ENTER_TEXT';
export const STATE_ACCORDION = 'STATE_ACCORDION';

export const questionForChat = data => {
  return {
    type: QUESTION_FOR_CHAT,
    payload: {
      data,
    },
  };
};

export const replyFromChat = data => {
  return {
    type: REPLY_FROM_CHAT,
    payload: {
      data,
    },
  };
};

export const dateQuestionForChat = data => {
  return {
    type: DATE_QUESTION_FOR_CHAT,
    payload: {
      data,
    },
  };
};

export const dateReplyFromChat = data => {
  return {
    type: DATE_REPLY_FROM_CHAT,
    payload: {
      data,
    },
  };
};

export const canEnterRequest = data => {
  return {
    type: CAN_ENTER_TEXT,
    payload: {
      data,
    },
  };
};

export const stateAccordion = data => {
  return {
    type: STATE_ACCORDION,
    payload: {
      data,
    },
  };
};
