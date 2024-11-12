import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Dashboard from './components/Dashboard/Dashboard';
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/students",
        element: <Students></Students>,
        loader : ()=> fetch('/studentsData.json')
      },
      {
        path: "/teachers",
        element: <Teachers></Teachers>,
        loader : ()=> fetch('/teachersData.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
