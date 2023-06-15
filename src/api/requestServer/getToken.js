import axios from 'axios';
const url = 'http://91.196.52.61:8080/api_v1/Security/Login';

// function getToken(formData) {
//   return fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json;utc-8' },
//     body: JSON.stringify(formData),
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       if (res.status === 400) {
//         visibleNessageUI('Incorrect data entered');
//         return null;
//       }
//       console.log(res);
//       return res;
//     })
//     .then(res => {
//       return res;
//     })
//     .catch(err => {
//       console.error(err);
//     });
// }

//Without server

export const getToken = data => {
  console.log(data);
  return new Promise(function (res, rej) {
    setTimeout(() => res('fmplementatio09of325432hatGpt234response'), 500);
    setTimeout(() => rej('error'), 500);
  });
};

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
