import { allUsersArr } from './fakeDataUsers';

const currenntDateIso = () => {
  const currentDate = new Date();
  const result = currentDate.toISOString();
  return result;
};

const dateInIso = date => {
  const inputDate = new Date(date);
  const isoDate = inputDate.toISOString();
  return isoDate;
};

export const setCreateUser = data => {
  const lastUser = allUsersArr[allUsersArr.length - 1];
  const lastId = lastUser.id;
  const newId = lastId + 1;
  const dateOfBirth = dateInIso(data.dateOfBirth);
  const role = data.roleId === 1 ? 'admin' : 'manager';
  const newUser = {
    ...data,
    dateOfBirth,
    id: newId,
    blocked: false,
    createdAt: currenntDateIso(),
    department: null,
    departmentId: 0,
    driverCategory: null,
    hireDate: currenntDateIso(),
    lastLoginAt: currenntDateIso(),
    roleId: data.roleId,
    role,
  };
  allUsersArr.push(newUser);
};

export const setPutUser = data => {
  const userId = data.id;
  const user = allUsersArr.find(item => item.id === userId);
  const role = data.roleId === 1 ? 'admin' : 'manager';
  const dateOfBirth = dateInIso(data.dateOfBirth);
  const hireDate = dateInIso(data.hireDate);
  user.name = data.name;
  user.email = data.email;
  user.phone = data.phone;
  user.homePhone = data.homePhone;
  user.dateOfBirth = dateOfBirth;
  user.hireDate = hireDate;
  user.roleId = data.roleId;
  user.role = role;
  console.log(allUsersArr);
};

// const isoInIsoMinusOneDay = date => {
//     const currentDate = new Date(date);
//     currentDate.setDate(currentDate.getDate() - 1);
//     const result = currentDate.toISOString();
//     return result;
//   };
//   const isoInIsoPlusOneDay = date => {
//     const currentDate = new Date(date);
//     currentDate.setDate(currentDate.getDate() + 1);
//     const result = currentDate.toISOString();
//     return result;
//   };
