import { getToken } from '../../api/requestServer/getToken';
// import { getDateCurrency } from '../../api/getTime';
import * as authActions from '../actions/authorization.actions';
import * as uiActions from '../actions/ui.actions';
import * as dataUsersActions from '../actions/dataUsers.actions';

let countError = 0;

export const getTokenDispatch = data => {
  const cors = 'cors';
  const noCors = 'no-cors';
  return function (dispatch) {
    getToken(data, cors)
      .then(res => {
        countError = 0;
        if (res === 'status 400') {
          dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getToken status 400'));
          return;
        }
        if (res === 'status 0') {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getToken status 0'));
          dispatch(uiActions.incorrectFunction('Incorrect getToken'));
          return;
        }
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage('Hello Admin'));
        dispatch(authActions.tokenAuth(res));
        dispatch(uiActions.loggedIn(true));
        dispatch(uiActions.serverWork(true));
      })
      .catch(rej => {
        if (countError === 0) {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.incorrectFunction('Error in getToken'));
          countError++;
          dispatch(getTokenDispatch(data, noCors));
        }
        if (countError === 1) {
          dispatch(uiActions.incorrectFunction(null));
          dispatch(uiActions.serverWork(false));
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
