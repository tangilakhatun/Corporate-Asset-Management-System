import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterHR from "../pages/registerhr/RegisterHR";
import RegisterEmployee from "../pages/registerempoyee/RegisterEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/login",
        Component:Login
      },
      {
        path:"/register/hr",
        Component:RegisterHR
      },
      {
        path:"/register/employee",
        Component:RegisterEmployee
      }

    ]
  },
]);
export default router