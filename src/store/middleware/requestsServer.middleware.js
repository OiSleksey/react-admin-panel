import { autorization } from '../../api/requestServer/autorization';
import { getAllUsers } from '../../api/requestServer/getAllUsers';
import { putUser } from '../../api/requestServer/putUser';
import { createUser } from '../../api/requestServer/createUser';
// import { getDateCurrency } from '../../api/getTime';
import * as authActions from '../actions/authorization.actions';
import * as uiActions from '../actions/ui.actions';
import * as dataUsersActions from '../actions/dataUsers.actions';
import * as filterTableActions from '../actions/filterTable.actions';

// import { quantityErr } from '../../utils/globalVariable';

const cors = 'cors';
const noCors = 'no-cors';

export const autorizationDispatch = data => {
  return function (dispatch, getState) {
    const state = getState();
    const errAutorization = state.ui.incorrectFunction;
    autorization(data, cors)
      .then(res => {
        if (res === 'status 400') {
          dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('autorization status 400'));
          return;
        }
        if (res === 'status 404') {
          dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('autorization status 404'));
          dispatch(uiActions.incorrectFunction('Incorrect autorization'));
          return;
        }
        if (res === 'status 0') {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('autorization status 0'));
          dispatch(uiActions.incorrectFunction('Incorrect autorization'));
          return;
        }
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage(`Hello ${res.name}`));
        dispatch(authActions.authData(res));
        dispatch(uiActions.loggedIn(true));
        dispatch(uiActions.serverWork(true));
        dispatch(getAllUsersDispath(res.code));
        dispatch(filterTableActions.activeBtnDisplay('allUsers'));
      })
      .catch(rej => {
        if (!errAutorization) {
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.incorrectFunction('Error in autorization'));
          dispatch(autorizationDispatch(data, noCors));
        }
        if (errAutorization === 'Error in autorization') {
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
    const activeBtnDisplay = state.filterTable.activeBtnDisplay;
    const prevActiveBtnDisplay = state.filterTable.prevActiveBtnDisplay;
    const errGetAllUsers = state.ui.incorrectFunction;
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
        if (activeBtnDisplay === 'updateData')
          dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
      })
      .catch(rej => {
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.loggedIn(false));
        dispatch(authActions.authData(null));
      });
  };
};

export const putUserDispath = (userData, code) => {
  return function (dispatch, getState) {
    const state = getState();
    const errGetAllUsers = state.ui.incorrectFunction;
    putUser(userData, code)
      .then(res => {
        if (res === 'status 404') {
          // dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('putUser status 404'));
          dispatch(uiActions.incorrectFunction('Incorrect putUser'));
          return;
        }
        dispatch(getAllUsersDispath(code));
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage(`Change user data`));
        dispatch(uiActions.serverWork(true));
      })
      .catch(rej => {
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.loggedIn(false));
        dispatch(authActions.authData(null));
      });
  };
};

export const createUserDispath = (userData, code) => {
  return function (dispatch, getState) {
    const state = getState();
    const errGetAllUsers = state.ui.incorrectFunction;
    createUser(userData, code)
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
};
