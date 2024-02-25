import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: '',
  reducers: {
    setToken: (state, action) => action.payload, 
  },
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;