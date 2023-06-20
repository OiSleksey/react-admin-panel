export const createUser = (formData, code) => {
  const url = 'http://91.196.52.61:8080/api_v1/Admin/Create';
  const authorizationCode = `Bearer ${code}`;
  return fetch(url, {
    method: 'POST',
    headers: {
      accept: '*/*',
      Authorization: authorizationCode,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      console.log(res);
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
      console.log(res);
      return res;
    })
    .catch(error => {
      console.error(error.message);
      return null;
    });
};
