import { createSlice } from '@reduxjs/toolkit';

const UpdateSlice = createSlice({
  name: 'isUpdating',
  initialState: {
    isUpdating: false,
  },
  reducers: {
    updatedState: (state, action) => {
      state.isUpdating = action.payload;
    },
  },
});
export const { updatedState } = UpdateSlice.actions;
export default UpdateSlice.reducer;
