import {
  authorization,
  authorizationFake,
} from '../../api/requestServer/authorization';
import { getAllUsers } from '../../api/requestServer/getAllUsers';
import { putUser } from '../../api/requestServer/putUser';
import { createUser } from '../../api/requestServer/createUser';
import * as authActions from '../actions/authorization.actions';
import * as uiActions from '../actions/ui.actions';
import * as dataUsersActions from '../actions/dataUsers.actions';
import * as filterTableActions from '../actions/filterTable.actions';
import { getAllUsersDispath } from './getAllUser.middleware';

const cors = 'cors';
const noCors = 'no-cors';

const closeBackDropLoading = dispatch => {
  setTimeout(() => {
    dispatch(uiActions.backDropLoading(false));
  }, 1000);
};

const closeProgress = dispatch => {
  setTimeout(() => {
    dispatch(uiActions.stateProgress(true));
  }, 1000);
};

const openProgress = dispatch => {
  dispatch(uiActions.stateProgress(true));
};

const serverDontWork = dispatch => {
  dispatch(uiActions.serverWork(false));
  dispatch(uiActions.incorrectFunction('Server don`t work'));
  dispatch(uiActions.errorMessage('Server don`t work'));
};

const authorizationLogic = (func, dispatch, data) => {
  func(data)
    .then(res => {
      console.log(res);
      if (res === 'status 400') {
        dispatch(uiActions.loggedIn(false));
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.errorMessage('autorization status 400'));
        closeBackDropLoading(dispatch);
        return;
      }
      if (res === 'status 404') {
        dispatch(uiActions.loggedIn(false));
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.errorMessage('autorization status 404'));
        dispatch(
          uiActions.incorrectFunction('Incorrect autorization status 404')
        );
        closeBackDropLoading(dispatch);
        return;
      }
      if (res === 'Network Error') {
        serverDontWork(dispatch);
        closeBackDropLoading(dispatch);
        return;
      }
      dispatch(uiActions.stateProgress(true));
      dispatch(uiActions.incorrectFunction(null));
      dispatch(uiActions.positiveMessage(`Hello ${res.name}`));
      openProgress(dispatch);
      closeProgress(dispatch);
      dispatch(authActions.authData(res));
      dispatch(uiActions.loggedIn(true));
      dispatch(uiActions.serverWork(true));
      dispatch(getAllUsersDispath(res.code));
      dispatch(filterTableActions.activeBtnDisplay('allUsers'));
      closeBackDropLoading(dispatch);
    })
    .catch(rej => {
      console.log(rej);
      console.log('Second error');
      dispatch(
        uiActions.incorrectFunction('Error in autorization: Server don`t work')
      );
      dispatch(uiActions.errorMessage('Server don`t work'));
      dispatch(uiActions.serverWork(false));
      closeBackDropLoading(dispatch);
    });
};

export const autorizationDispatch = data => {
  return function (dispatch, getState) {
    const state = getState();
    const errAutorization = state.ui.incorrectFunction;
    const isFakeServer = state.ui.fakeServer;
    console.log('isFakeServer', isFakeServer);
    const typeFunc = isFakeServer ? authorizationFake : authorization;
    authorizationLogic(typeFunc, dispatch, data, state);
  };
};
