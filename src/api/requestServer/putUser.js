import axios from 'axios';
import { responseLogin } from '../../utils/fakeDataUsers';
import { setPutUser } from '../../utils/fakeLogic';
// const url = 'http://91.196.52.61:8080/api_v1/Admin/Update';

const url = process.env.REACT_APP_API_UPDATE;
const bearer = process.env.REACT_APP_BEARER;

export function putUser(formData, code) {
  const authorizationCode = `${bearer} ${code}`;
  return axios
    .put(url, formData, {
      headers: {
        accept: '*/*',
        Authorization: authorizationCode,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        return res.data;
      }
      return res;
    })
    .catch(error => {
      console.log(error);
      if (error.response?.status === 401) {
        const message = 'status 404';
        return message;
      }
      if (error.response?.status === 404) {
        const message = 'status 404';
        return message;
      }
      if (error.response?.status === 400) {
        const message = 'status 400';
        return message;
      }
      return error.message;
    });
}

export const putUserFake = (formData, code) => {
  return new Promise(function (res, rej) {
    const correctCode = responseLogin.code;
    if (correctCode === code) {
      console.log(formData);
      setPutUser(formData);
      setTimeout(() => res('Update user'), 500);
      return;
    }
    setTimeout(() => res('status 400'), 500);
  });
};

// export function putUser(formData, code) {
//   const authorizationCode = `${bearer} ${code}`;
//   return fetch(url, {
//     method: 'PUT',
//     headers: {
//       accept: '*/*',
//       Authorization: authorizationCode,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   })
//     .then(res => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       }
//       if (res.status === 0) {
//         //сервер працює, це значить що треба показати логін 403
//         const message = 'status 403';
//         return message;
//       }

//       if (res.status === 404) {
//         console.error('status - 404');
//         const message = 'status 404';
//         return message;
//       }
//     })
//     .then(res => {
//       console.log(res);
//       return res;
//     })
//     .catch(error => {
//       console.error(error.message);
//       return null;
//     });
// }
