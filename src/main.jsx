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
import Store from "./redux/app/Store";
import AddStudent from "./components/AddStudent/AddStudent";
import AddTeacher from "./components/AddTeacher/AddTeacher";
import AddNotice from "./components/AddNotice/AddNotice";
import LogIn from "./components/LogIn/LogIn.";
import { Provider } from "react-redux";

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
        path: "/students/addStudent",
        element: <AddStudent />,
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>,
        loader: () => fetch("/teachersData.json"),
      },
      {
        path: "/teachers/addTeacher",
        element: <AddTeacher />,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
        loader: () => fetch("/notice.json"),
      },
      {
        path: "/notice/addNotice",
        element: <AddNotice />,
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
        path: "/tchdetails/:id",
        element: <TeachersDetails></TeachersDetails>,
        loader: () => fetch("/teachersData.json"),
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
