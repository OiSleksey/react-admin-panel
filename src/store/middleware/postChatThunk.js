import { postRequest } from '../../api/postOpenAi';
import { getDateCurrency } from '../../api/getTime';
import * as actions from '../actions/chatWithOpenAi.actions';

export const openAiDispatch = message => {
  return function (dispatch) {
    dispatch(actions.canEnterRequest(false));
    dispatch(actions.questionForChat(message));
    dispatch(actions.dateQuestionForChat(getDateCurrency()));
    postRequest(message)
      .then(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      })
      .catch(data => {
        dispatch(actions.replyFromChat(data));
        dispatch(actions.canEnterRequest(true));
        dispatch(actions.dateReplyFromChat(getDateCurrency()));
      });
  };
};
