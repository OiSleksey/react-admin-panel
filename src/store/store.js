import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authorizationReducer } from './reducers/authorization.reducer';
import { uiReducer } from './reducers/ui.reducer';
import { dataUsersReducer } from './reducers/dataUsers.reducer';
import { filterTableReducer } from './reducers/filterTable.reducer';
// import { beAutorized } from '../components/forms/LoginForm/LoginForm';
// console.log(beAutorized);
// const allReducers = combineReducers({
//   adminPanel: requestsServer,
// });
const allReducers = combineReducers({
  authorization: authorizationReducer,
  ui: uiReducer,
  dataUsers: dataUsersReducer,
  filterTable: filterTableReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// const state = store.getState();
// console.log(state.adminPanel);

export const persistor = persistStore(store);

export default store;
