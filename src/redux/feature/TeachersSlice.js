import { createSlice } from "@reduxjs/toolkit";

export const TeachersSlice = createSlice({
  name: "counter",
  initialState: {
    teachers: [],
  },
  reducers: {
    teacher: (state, action) => {
      state.teachers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { teacher } = TeachersSlice.actions;

export default TeachersSlice.reducer;
