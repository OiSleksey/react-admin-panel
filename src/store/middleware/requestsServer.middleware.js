import { autorization } from '../../api/requestServer/autorization';
import { getAllUsers } from '../../api/requestServer/getAllUsers';
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

export const autorizationDispatch = data => {
  return function (dispatch, getState) {
    const state = getState();
    const errAutorization = state.ui.incorrectFunction;
    autorization(data)
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
        dispatch(uiActions.incorrectFunction(null));
        dispatch(uiActions.positiveMessage(`Hello ${res.name}`));
        dispatch(authActions.authData(res));
        dispatch(uiActions.loggedIn(true));
        dispatch(uiActions.serverWork(true));
        dispatch(getAllUsersDispath(res.code, cors));
        dispatch(filterTableActions.activeBtnDisplay('allUsers'));
        closeBackDropLoading(dispatch);
      })
      .catch(rej => {
        console.log(rej);
        // if (!errAutorization) {
        //   console.log('First error');
        //   dispatch(uiActions.serverWork(true));
        //   dispatch(uiActions.incorrectFunction('Error in autorization'));
        //   dispatch(uiActions.errorMessage('Error in autorization'));
        //   dispatch(autorizationDispatch(data, noCors));
        //   return;
        // }
        // if (errAutorization === 'Error in autorization') {
        console.log('Second error');
        dispatch(
          uiActions.incorrectFunction(
            'Error in autorization: Server don`t work'
          )
        );
        dispatch(uiActions.errorMessage('Server don`t work'));
        dispatch(uiActions.serverWork(false));
        closeBackDropLoading(dispatch);
        //   return;
        // }
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
    getAllUsers(code)
      .then(res => {
        console.log(res);
        if (res === 'Network Error') {
          dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
          dispatch(uiActions.errorMessage('getAllUsers status 401'));
          dispatch(uiActions.incorrectFunction('getAllUsers status 401'));
          dispatch(uiActions.loggedIn(false));
          dispatch(authActions.authData(null));
          return;
        }
        if (res === 'status 404') {
          // dispatch(uiActions.loggedIn(false));
          dispatch(uiActions.serverWork(true));
          dispatch(uiActions.errorMessage('getAllUsers status 404'));
          dispatch(uiActions.incorrectFunction('Incorrect getAllUsers'));
          dispatch(filterTableActions.activeBtnDisplay(prevActiveBtnDisplay));
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
        console.log(rej);
        dispatch(uiActions.serverWork(true));
        dispatch(uiActions.loggedIn(false));
        dispatch(authActions.authData(null));
        dispatch(uiActions.errorMessage('Error in token'));
        dispatch(uiActions.incorrectFunction('Error in getAllUsers'));
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
