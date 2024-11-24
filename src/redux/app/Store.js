import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "../feature/StudentsSlice";
import TeachersSlice from "../feature/TeachersSlice";

export default configureStore({
  reducer: {
    allstudents: StudentsSlice,
    allteachers: TeachersSlice,
  },
});
