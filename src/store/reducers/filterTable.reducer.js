import { FILTER_SWITCH_STATE } from '../actions/filterTable.actions';

const initialState = {
  id: true,
  name: true,
  email: true,
  phone: true,
  homePhone: true,
  createdAt: true,
  hireDate: true,
  dateOfBirth: true,
  lastLoginAt: true,
  blocked: true,
  role: true,
};

export const filterTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SWITCH_STATE: {
      const key = action.payload.key;
      const value = action.payload.value;
      return {
        ...state,
        [key]: value,
      };
    }

    default:
      return state;
  }
};

// const key = 'id';
// const value = '22'

// const obj = {
//   id: 22,
// }
