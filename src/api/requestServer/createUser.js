import axios from 'axios';
// const url = 'http://91.196.52.61:8080/api_v1/Admin/Create';

const url = process.env.REACT_APP_API_CREATE;
const bearer = process.env.REACT_APP_BEARER;

export const createUser = (formData, code) => {
  const authorizationCode = `${bearer} ${code}`;
  return axios
    .post(url, formData, {
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
      if (res.status === 0) {
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
      console.log(res);
      return res;
    })
    .catch(error => {
      console.error(error.message);
      return null;
    });
};

// export const createUser = (formData, code) => {
//   const authorizationCode = `${bearer} ${code}`;
//   return fetch(url, {
//     method: 'POST',
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
// };
