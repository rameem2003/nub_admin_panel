import { createSlice } from "@reduxjs/toolkit";

export const StudentsSlice = createSlice({
  name: "counter",
  initialState: {
    students: [],
  },
  reducers: {
    student: (state, action) => {
      state.students = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { student } = StudentsSlice.actions;

export default StudentsSlice.reducer;
