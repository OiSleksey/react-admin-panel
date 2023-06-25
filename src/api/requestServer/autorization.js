import axios from 'axios';
// const url = 'http://91.196.52.61:8080/api_v1/Security/Login';
const url = process.env.REACT_APP_API_LOGIN;

export function autorization(formData, cors) {
  console.trace();
  return axios
    .post(url, formData, {
      headers: { 'Content-Type': 'application/json;utc-8' },
      // mode: cors,
    })
    .then(res => {
      console.log(res);
      if (res.status === 200) {
        return res.data;
      }
      // if (res.status === 0) {
      //   const message = 'status 0';
      //   return message;
      // }
      return res;
    })
    .catch(error => {
      console.error(error);
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

// Without server
// CORS
// 1) res.ok === true //data{code,refreskToken}// Snake BAR
// 2) res.status = 400 //Incorrect data entered// Snake BAR
// 3) catch
// 3.1) Перевірка на СORS чи працює сервер
// 3.2) Перевірка на NO-СORS чи працює сервер
// res.status === 0 !!!! То я я щось роблю не так
// catch ErrorServerPage 501 Server dont work
// let count = 0;
// export const getToken = data => {
//   console.log(data);
//   return new Promise(function (res, rej) {
//     //good token
//     setTimeout(() => res('fmplementatio09of325432hatGpt234response'), 500);
//     // //status 400
//     // setTimeout(() => res('status 400'), 500);
//     //catch 1
//     // if (count === 0)
//     //   setTimeout(() => {
//     //     console.log(count);
//     //     count++;
//     //     rej('error');
//     //   }, 500);
//     // if (count === 1) setTimeout(() => res('status 0'), 500);
//   });
// };

// export function autorization(formData, cors) {
//   console.trace();
//   return fetch(url, {
//     mode: cors,
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json;utc-8' },
//     body: JSON.stringify(formData),
//   })
//     .then(res => {
//       console.log(res);
//       if (res.ok) {
//         return res.json();
//       }
//       if (res.status === 400) {
//         const message = 'status 400';
//         return message;
//       }
//       if (res.status === 404) {
//         console.error('status - 404');
//         const message = 'status 404';
//         return message;
//       }
//       if (res.status === 0) {
//         const message = 'status 0';
//         return message;
//       }
//       return res;
//     })
//     .catch(err => {
//       console.error(err);
//       return null;
//     });
// }

// // With server

// const url = 'http://localhost:4001/';

// export const postRequest = async message => {
//   try {
//     console.log(message);
//     const response = await axios.post(
//       url,
//       { message },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     console.log(response.data.message);
//     return response.data.message;
//   } catch (error) {
//     console.error(error);
//     return 'Sorry. An error occurred on the server. We are working on it. Please try again later.';
//   }
// };
