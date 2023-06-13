import {
  QUESTION_FOR_CHAT,
  REPLY_FROM_CHAT,
  CAN_ENTER_TEXT,
  DATE_QUESTION_FOR_CHAT,
  DATE_REPLY_FROM_CHAT,
  STATE_ACCORDION,
} from '../actions/chatWithOpenAi.actions';

const initialState = {
  questions: [],
  replies: [],
  dateQuestions: [],
  dateReplies: [],
  canEnterMessage: true,
  openAccordion: true,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTION_FOR_CHAT: {
      const newQuestion = state.questions.concat(action.payload.data);
      return {
        ...state,
        questions: newQuestion,
      };
    }
    case REPLY_FROM_CHAT: {
      const newReply = state.replies.concat(action.payload.data);
      return {
        ...state,
        replies: newReply,
      };
    }
    case DATE_QUESTION_FOR_CHAT: {
      const newQuestion = state.dateQuestions.concat(action.payload.data);
      return {
        ...state,
        dateQuestions: newQuestion,
      };
    }
    case DATE_REPLY_FROM_CHAT: {
      const newReply = state.dateReplies.concat(action.payload.data);
      return {
        ...state,
        dateReplies: newReply,
      };
    }
    case CAN_ENTER_TEXT: {
      return {
        ...state,
        canEnterMessage: action.payload.data,
      };
    }
    case STATE_ACCORDION: {
      return {
        ...state,
        openAccordion: action.payload.data,
      };
    }
    default:
      return state;
  }
};
