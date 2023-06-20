// formUpdateUser.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const email = emailLowerTrim(inputEmail);
//     const name = inputTrim(inputName);
//     const phone = inputTrim(inputPhone);
//     const homePhone = inputTrim(inputHomePhone);
//     const manager = checkedManager.checked;
//     const admin = checkedManager.checked;
//     let roleId = null;
//     if (manager) roleId = 1;
//     if (admin) roleId = 2;
//     //Перевірка на ввід усіх данних форми
//     if (
//       email === '' ||
//       name === '' ||
//       phone === '' ||
//       homePhone === '' ||
//       inputBirthDay.value === '' ||
//       inputHireDay.value === ''
//     ) {
//       if (email === '') validateEmail();
//       if (name === '') unValidateInput(inputName);
//       if (phone === '') unValidateInput(inputPhone);
//       if (homePhone === '') unValidateInput(inputHomePhone);
//       if (inputBirthDay.value === '') unValidateInput(inputBirthDay);
//       if (inputHireDay.value === '') unValidateInput(inputHireDay);
//       return;
//     }
//     // //Об'єкт для відправлення на Сервер через ПОСТ
//     const dateOfBirthValue = new Date(inputBirthDay.value);
//     const hireDateValue = new Date(inputHireDay.value);
//     const dateOfBirth = dateOfBirthValue.toISOString();
//     const hireDate = hireDateValue.toISOString();
//     const formData = {
//       id: currentId,
//       email,
//       name,
//       phone,
//       homePhone,
//       roleId,
//       hireDate,
//       dateOfBirth,
//       departmentId: 0,
//       driverCategory: 'string',
//     };
//     const getData = JSON.parse(localStorage.getItem('accessToken'));
//     const accessToken = getData.accessToken;
//     updateUser(formData, accessToken);
//   });

export function putUser(formData, code) {
  const url = 'http://91.196.52.61:8080/api_v1/Admin/Update';
  const authorizationCode = `Bearer ${code}`;
  return fetch(url, {
    method: 'PUT',
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
}
