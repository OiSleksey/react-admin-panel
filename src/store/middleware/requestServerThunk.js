import { getToken } from '../../api/requestServer/getToken';
// import { getDateCurrency } from '../../api/getTime';
import * as actions from '../actions/requestsServer.actions';

let countError = 0;

export const getTokenDispatch = data => {
  const cors = 'cors';
  const noCors = 'no-cors';
  return function (dispatch) {
    getToken(data, cors)
      .then(res => {
        countError = 0;
        if (res === 'status 400') {
          dispatch(actions.loggedIn(false));
          dispatch(actions.serverWork(true));
          dispatch(actions.wrongGetTokenCode(false));
          return;
        }
        if (res === 'status 0') {
          dispatch(actions.serverWork(true));
          dispatch(actions.wrongGetTokenCode(true));
          return;
        }
        dispatch(actions.wrongGetTokenCode(false));
        dispatch(actions.tokenAuth(res));
        dispatch(actions.loggedIn(true));
        dispatch(actions.serverWork(true));
      })
      .catch(rej => {
        if (countError === 0) {
          dispatch(actions.serverWork(true));
          dispatch(actions.wrongGetTokenCode(true));
          countError++;
          dispatch(getTokenDispatch(data, noCors));
        }
        if (countError === 1) {
          dispatch(actions.wrongGetTokenCode(false));
          dispatch(actions.serverWork(false));
          countError++;
        }
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
