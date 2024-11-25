import { configureStore } from "@reduxjs/toolkit";
import StudentsSlice from "../feature/StudentsSlice";
import TeachersSlice from "../feature/TeachersSlice";
import NoticesSlice from "../feature/NoticesSlice";

export default configureStore({
  reducer: {
    allstudents: StudentsSlice,
    allteachers: TeachersSlice,
    allnotices: NoticesSlice,
  },
});
