import { createSlice } from '@reduxjs/toolkit';

const UpdateSlice = createSlice({
  name: 'isUpdating',
  initialState: {
    isTrue: false,
  },
  reducers: {
    update: (state, action) => {
      state.isTrue = action.payload;
    },
  },
});
export const { update } = UpdateSlice.actions;
export default UpdateSlice.reducer;
