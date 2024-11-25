import { createSlice } from "@reduxjs/toolkit";

export const NoticesSlice = createSlice({
  name: "counter",
  initialState: {
    notices: [],
  },
  reducers: {
    notice: (state, action) => {
      state.notices = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { notice } = NoticesSlice.actions;

export default NoticesSlice.reducer;
