import { getToken } from '../../api/requestServer/getToken';
// import { getDateCurrency } from '../../api/getTime';
import * as actions from '../actions/requestsServer.actions';

export const getTokenDispatch = data => {
  return function (dispatch) {
    // dispatch(actions.canEnterRequest(false));
    // dispatch(actions.questionForChat(message));
    // dispatch(actions.dateQuestionForChat(getDateCurrency()));
    getToken(data)
      .then(res => {
        dispatch(actions.tokenAuth(res));
        // dispatch(actions.canEnterRequest(true));
        // dispatch(actions.dateReplyFromChat(getDateCurrency()));
      })
      .catch(rej => {
        dispatch(actions.tokenAuth(rej));
        // dispatch(actions.canEnterRequest(true));
        // dispatch(actions.dateReplyFromChat(getDateCurrency()));
      });
  };
};

// import { postRequest } from '../../api/postOpenAi';
// import { getDateCurrency } from '../../api/getTime';
// import * as actions from '../actions/chatWithOpenAi.actions';

// export const openAiDispatch = message => {
//   return function (dispatch) {
//     dispatch(actions.canEnterRequest(false));
//     dispatch(actions.questionForChat(message));
//     dispatch(actions.dateQuestionForChat(getDateCurrency()));
//     postRequest(message)
//       .then(data => {
//         dispatch(actions.replyFromChat(data));
//         dispatch(actions.canEnterRequest(true));
//         dispatch(actions.dateReplyFromChat(getDateCurrency()));
//       })
//       .catch(data => {
//         dispatch(actions.replyFromChat(data));
//         dispatch(actions.canEnterRequest(true));
//         dispatch(actions.dateReplyFromChat(getDateCurrency()));
//       });
//   };
// };
