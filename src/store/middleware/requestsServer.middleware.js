import { getToken } from '../../api/requestServer/getToken';
import { getAllUsers } from '../../api/requestServer/getAllUsers';
// import { getDateCurrency } from '../../api/getTime';
import * as authActions from '../actions/authorization.actions';
import * as uiActions from '../actions/ui.actions';
import * as dataUsersActions from '../actions/dataUsers.actions';
// import { quantityErr } from '../../utils/globalVariable';

const cors = 'cors';
const noCors = 'no-cors';

export const getTokenDispatch = data => {
  return function (dispatch, getState) {
    const state = getState();
    const errGetToken = state.ui.incorrectFunction;
    console.log(errGetToken);
    getToken(data, cors)
      .then(res => {
        if (res === 'status 400') {
          dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getToken status 400'));
          return;
        }
        if (res === 'status 404') {
          dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getToken status 404'));
          dispatch(uiActions.incorrectFunction('Incorrect getToken'));
          return;
        }
        if (res === 'status 0') {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getToken status 0'));
          dispatch(uiActions.incorrectFunction('Incorrect getToken'));
          return;
        }
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage(`Hello ${res.name}`));
        dispatch(authActions.tokenAuth(res.code));
        dispatch(uiActions.loggedIn(true));
        dispatch(uiActions.serverWork(true));
      })
      .catch(rej => {
        if (!errGetToken) {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.incorrectFunction('Error in getToken'));
          dispatch(getTokenDispatch(data, noCors));
        }
        if (errGetToken === 'Error in getToken') {
          dispatch(uiActions.incorrectFunction(null));
          dispatch(uiActions.serverWork(false));
        }
      });
  };
};

// let quantityErr = 0;

export const getAllUsersDispath = code => {
  return function (dispatch, getState) {
    const state = getState();
    const errGetAllUsers = state.ui.incorrectFunction;
    console.log(errGetAllUsers);
    getAllUsers(code, cors)
      .then(res => {
        if (res === 'status 404') {
          // dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getAllUsers status 404'));
          dispatch(uiActions.incorrectFunction('Incorrect getAllUsers'));
          return;
        }
        dispatch(dataUsersActions.dataUsers(res.data));
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage(`Get all users data`));
        dispatch(uiActions.serverWork(true));
      })
      .catch(rej => {
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.loggedIn(false));
        dispatch(authActions.tokenAuth(null));
      });
  };
};

// if (res === 'status 0') {
//   dispatch(uiActions.serverWork(true));
//   dispatch(uiActions.errorMessage('getToken status 0'));
//   dispatch(uiActions.incorrectFunction('Incorrect getToken'));
//   return;
// }

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
