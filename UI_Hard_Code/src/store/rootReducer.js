import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './modules/authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;