import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "../feature/StudentsSlice";

export default configureStore({
  reducer: {
    allstudents: StudentsSlice,
  },
});
