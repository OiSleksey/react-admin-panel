import { autorization } from '../../api/requestServer/authorization';
import { getAllUsers } from '../../api/requestServer/getAllUsers';
import { putUser } from '../../api/requestServer/putUser';
import { createUser, createUserFake } from '../../api/requestServer/createUser';
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

const serverDontWork = dispatch => {
  dispatch(uiActions.serverWork(false));
  dispatch(uiActions.incorrectFunction('Server don`t work'));
  dispatch(uiActions.errorMessage('Server don`t work'));
};
const closeProgress = dispatch => {
  setTimeout(() => {
    dispatch(uiActions.stateProgress(false));
  }, 1500);
};

const openProgress = dispatch => {
  dispatch(uiActions.stateProgress(true));
};

const createUserLogic = (func, dispatch, userData, code, state) => {
  openProgress(dispatch);
  func(userData, code)
    .then(res => {
      if (res === 'status 404') {
        // dispatch(uiActions.loggedIn(false));
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.errorMessage('createUser status 404'));
        dispatch(uiActions.incorrectFunction('Incorrect createUser'));
        return;
      }
      dispatch(getAllUsersDispath(code));
      dispatch(uiActions.incorrectFunction(null));
      dispatch(uiActions.positiveMessage(`Create new user`));
      dispatch(uiActions.serverWork(true));
    })
    .catch(rej => {
      dispatch(uiActions.serverWork(true));
      dispatch(uiActions.loggedIn(false));
      dispatch(authActions.authData(null));
    });
};

export const createUserDispath = (userData, code) => {
  return function (dispatch, getState) {
    const state = getState();
    const errGetAllUsers = state.ui.incorrectFunction;
    const isFakeServer = state.ui.fakeServer;
    // console.log('isFakeServer GETALLUSER', isFakeServer);
    const typeFunc = isFakeServer ? createUserFake : createUser;
    createUserLogic(typeFunc, dispatch, userData, code, state);
  };
};
