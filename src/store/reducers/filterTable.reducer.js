import {
  FILTER_SWITCH_STATE,
  VALUE_SEARCH,
  ACTIVE_BTN_DISPLAY,
} from '../actions/filterTable.actions';

const initialState = {
  showColumns: {
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
  },
  prevActiveBtnDisplay: null,
  activeBtnDisplay: 'allUsers',
  valueSearch: '',
};

export const filterTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SWITCH_STATE: {
      const key = action.payload.key;
      const value = action.payload.value;
      return {
        ...state,
        showColumns: {
          ...state.showColumns,
          [key]: value,
        },
      };
    }
    case ACTIVE_BTN_DISPLAY: {
      const prevValue = state.activeBtnDisplay;
      return {
        ...state,
        prevActiveBtnDisplay: prevValue,
        activeBtnDisplay: action.payload.data,
      };
    }
    case VALUE_SEARCH: {
      return {
        ...state,
        valueSearch: action.payload.data,
      };
    }

    default:
      return state;
  }
};
