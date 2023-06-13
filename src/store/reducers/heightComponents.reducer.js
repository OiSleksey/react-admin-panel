import {
  CHAT_HEIGHT,
  ACCORDION_HEIGHT,
  INPUT_HEIGHT,
} from '../actions/heightComponents.actions';

const initialState = {
  accordion: null,
  correspodence: null,
  chat: null,
  input: null,
};

export const heightComponentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_HEIGHT: {
      return {
        ...state,
        chat: action.payload.data,
      };
    }
    case ACCORDION_HEIGHT: {
      return {
        ...state,
        accordion: action.payload.data,
      };
    }
    case INPUT_HEIGHT: {
      return {
        ...state,
        input: action.payload.data,
      };
    }
    default:
      return state;
  }
};
