import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import Dashboard from "./components/Dashboard/Dashboard";
import Students from "./components/Students/Students";
import Teachers from "./components/Teachers/Teachers";
import Notice from "./components/Notice/Notice";
import Video from "./components/Video/Video";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Studentsdetails from "./components/Studentsdetails/Studentsdetails";
import TeachersDetails from "./components/TeachersDetails/TeachersDetails";
import { Provider } from "react-redux";
import Store from "./redux/app/Store";
import AddStudent from "./components/AddStudent/AddStudent";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AddNotice from "./components/AddNotice/AddNotice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/students",
        element: <Students></Students>,
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>,
        loader: () => fetch("/teachersData.json"),
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
        loader: () => fetch("/notice.json"),
      },
      {
        path: "/videos",
        element: <Video></Video>,
        loader: () => fetch("/video.json"),
      },
      {
        path: "/stddetails/:id",
        element: <Studentsdetails></Studentsdetails>,
      },
      {
        path: '/students/addStudent',
        element: <AddStudent></AddStudent>,
      },
      {
        path: '/teachers/addTeacher',
        element: <AddTeacher></AddTeacher>,
      },
      {
        path: '/notice/noticeDetails',
        element: <AddNotice></AddNotice>,
      },
      {
        path: "/tchdetails/:id",
        element: <TeachersDetails></TeachersDetails>,
        loader: () => fetch("/teachersData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
