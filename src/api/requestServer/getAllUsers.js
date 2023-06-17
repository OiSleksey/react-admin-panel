import axios from 'axios';
const url = 'http://91.196.52.61:8080/api_v1/Admin/All';

export function getAllUsers(code, cors) {
  console.log('get request');
  const authorizationCode = `Bearer ${code}`;
  //   console.log(cors);
  return fetch(url, {
    //   mode: isCorse ? 'cors' : 'no-cors',
    mode: cors,
    method: 'GET',
    params: {
      offset: 0,
      limit: 50,
    },
    headers: {
      accept: '*/*',
      Authorization: authorizationCode,
    },
  })
    .then(res => {
      //   console.log(res);
      if (res.ok) {
        return res.json();
      }
      if (res.status === 0) {
        //сервер працює, це значить що треба показати логін 403
        const message = 'status 403';
        return message;
      }

      if (res.status === 404) {
        console.error('status - 404');
        const message = 'status 404';
        return message;
      }
    })
    .then(res => {
      //   console.log(res);
      return res;
    })
    .catch(error => {
      console.error(error.message);
      return null;
    });
}

// let quantityErrData = 0;

// export const getAllUsers = data => {
//   const cors = 'cors';
//   const noCors = 'no-cors';
//   return function (dispatch) {
//     getToken(data, cors)
//       .then(res => {
//         quantityErrData = 0;
//         if (res === 'status 403') {
//           dispatch(uiActions.loggedIn(false));
//           dispatch(uiActions.serverWork(true));
//           dispatch(uiActions.errorMessage('getAllUsers status 403'));
//           return;
//         }
//         if (res === 'status 0') {
//           dispatch(uiActions.serverWork(true));
//           dispatch(uiActions.errorMessage('getToken status 0'));
//           dispatch(uiActions.incorrectFunction('Incorrect getToken'));
//           return;
//         }
//         dispatch(uiActions.incorrectFunction(null));
//         dispatch(uiActions.positiveMessage(`Hello ${res.name}`));
//         dispatch(authActions.tokenAuth(res.code));
//         dispatch(uiActions.loggedIn(true));
//         dispatch(uiActions.serverWork(true));
//       })
//       .catch(rej => {
//         if (quantityErrData === 0) {
//           dispatch(uiActions.serverWork(true));
//           dispatch(uiActions.incorrectFunction('Error in getToken'));
//           quantityErrData++;
//           dispatch(getTokenDispatch(data, noCors));
//         }
//         if (quantityErrData === 1) {
//           dispatch(uiActions.incorrectFunction(null));
//           dispatch(uiActions.serverWork(false));
//           quantityErrData++;
//         }
//       });
//   };
// };
