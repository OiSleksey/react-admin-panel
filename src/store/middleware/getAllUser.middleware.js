import { autorization } from '../../api/requestServer/authorization';
import {
  getAllUsers,
  getAllUsersFake,
} from '../../api/requestServer/getAllUsers';
import { putUser } from '../../api/requestServer/putUser';
import { createUser } from '../../api/requestServer/createUser';
import * as authActions from '../actions/authorization.actions';
import * as uiActions from '../actions/ui.actions';
import * as dataUsersActions from '../actions/dataUsers.actions';
import * as filterTableActions from '../actions/filterTable.actions';

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

const getAllUsersLogic = (func, dispatch, code, state) => {
  const activeBtnDisplay = state.filterTable.activeBtnDisplay;
  const prevActiveBtnDisplay = state.filterTable.prevActiveBtnDisplay;
  const errGetAllUsers = state.ui.incorrectFunction;
  openProgress(dispatch);
  func(code)
    .then(res => {
      console.log(res);
      if (res === 'Network Error') {
        closeProgress(dispatch);
        dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
        dispatch(uiActions.errorMessage('getAllUsers status 401'));
        dispatch(uiActions.incorrectFunction('getAllUsers status 401'));
        dispatch(uiActions.loggedIn(false));
        dispatch(authActions.authData(null));
        return;
      }
      if (res === 'status 404') {
        // dispatch(uiActions.loggedIn(false));
        closeProgress(dispatch);
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.errorMessage('getAllUsers status 404'));
        dispatch(uiActions.incorrectFunction('Incorrect getAllUsers'));
        dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
        return;
      }
      closeProgress(dispatch);
      dispatch(dataUsersActions.dataUsers(res.data));
      dispatch(uiActions.incorrectFunction(null));
      dispatch(uiActions.positiveMessage(`Get all users data`));
      dispatch(uiActions.serverWork(true));
      if (activeBtnDisplay === 'updateData')
        dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
    })
    .catch(rej => {
      console.log(rej);
      dispatch(uiActions.serverWork(true));
      dispatch(uiActions.loggedIn(false));
      dispatch(authActions.authData(null));
      dispatch(uiActions.errorMessage('Error in token'));
      dispatch(uiActions.incorrectFunction('Error in getAllUsers'));
    });
};

export const getAllUsersDispath = code => {
  return function (dispatch, getState) {
    const state = getState();
    const isFakeServer = state.ui.fakeServer;
    // console.log('isFakeServer GETALLUSER', isFakeServer);
    const typeFunc = isFakeServer ? getAllUsersFake : getAllUsers;
    getAllUsersLogic(typeFunc, dispatch, code, state);
  };
};
