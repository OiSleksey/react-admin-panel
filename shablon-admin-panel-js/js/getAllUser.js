// import axios from 'axios';
import { displayDataUsers, updateDataUsers } from './displayUsers.js';
const adminLoginSection = document.querySelector('.admin-login');
const adminPanelSection = document.querySelector('.admin-panel');
const allUsersBtn = document.querySelector('#allUsers');
const updateDataBtn = document.querySelector('#updateData');
const loadingSection = document.querySelector('.loading');
const loadingMessage = document.querySelector('.loading__message');
const loadingBox = document.querySelector('.loading__box');
const messageUI = document.querySelector('.modal-body__message');
let isFirstGet = false;
// const adminLogin = {
//   password: 'admin123',
//   email: 'admin@admin.com',
// };

console.log(axios.isCancel('something'));

const viibleLoading = () => {
  loadingSection.classList.remove('d-none');
};

const hiddenLoading = () => {
  loadingSection.classList.add('d-none');
};

//Modal window message
const visibleNessageUI = message => {
  new bootstrap.Modal(document.getElementById('exampleModal')).show();
  messageUI.textContent = 'Server don`t work';
  loadingMessage.textContent = 'Server don`t work';
  // modalElement.addEventListener('hide.bs.modal', function () {
  //   if (message === 'Hello admin') {
  //     adminLoginSection.classList.add('d-none');
  //     adminPanelSection.classList.remove('d-none');
  //   }
  // });
  // if (message === 'Hello admin') {
  //   messageUI.textContent = '' + message;
  // }
  // if (message instanceof TypeError && message.message === 'Failed to fetch') {
  //   messageUI.textContent =
  //     'Sorry, the server is not responding. We are working on it. Try again later.';
  // }
  // if (message === 'Incorrect data entered') {
  //   messageUI.textContent = 'Incorrect data entered';
  // }
};

const showLogin = bool => {
  hiddenLoading();
  if (bool) {
    adminLoginSection.classList.remove('d-none');
    adminPanelSection.classList.add('d-none');
    return;
  }
  adminLoginSection.classList.add('d-none');
  adminPanelSection.classList.remove('d-none');
};

export async function getAllDataUsers() {
  const allUsers = await getTokenLocalStorage();
  return allUsers;
}
async function onAllUsersBtn() {
  if (!isFirstGet) {
    const allUsers = await getAllDataUsers();
    displayDataUsers(allUsers);
    isFirstGet = !isFirstGet;
    return;
  }
  displayDataUsers(null);
}

async function onUpdateButton() {
  const allUsers = await getAllDataUsers();
  updateDataUsers(allUsers);
}

allUsersBtn.addEventListener('click', onAllUsersBtn);
updateDataBtn.addEventListener('click', onUpdateButton);

async function getTokenLocalStorage() {
  const getData = JSON.parse(localStorage.getItem('accessToken'));
  if (getData) {
    const accessToken = getData.accessToken;
    const dataUsers = await getAllUsers(accessToken, true);
    if (!dataUsers) {
      const dataUsers = await getAllUsers(accessToken, false);
      if (dataUsers === 'serverWork') {
        showLogin(true);
        console.log('serverWork');
        return;
      }
      console.log('server dont work');
      visibleNessageUI();
      return;
    }
    console.log(dataUsers);
    if (dataUsers) {
      showLogin(false);
      return dataUsers;
    }
    showLogin(true);
    return;
  }
  showLogin(true);
}

// Через фетч.
function getAllUsers(code, isCorse) {
  console.log('get request');
  const url = 'http://91.196.52.62:8080/api_v1/Admin/All';
  const authorizationCode = `Bearer ${code}`;
  return fetch(url, {
    mode: isCorse ? 'cors' : 'no-cors',
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
      if (res.status === 0) {
        //сервер працює, це значить що треба показати логін
        const objectResponse = {
          data: 'serverWork',
        };
        return objectResponse;
      }
      if (res.ok) {
        return res.json();
      }
      if (res.status === 404) {
        console.error('Error - 404');
      }
    })
    .then(response => {
      hiddenLoading();
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
      return null;
    });
}
