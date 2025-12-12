import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterHR from "../pages/registerhr/RegisterHR";
import RegisterEmployee from "../pages/registerempoyee/RegisterEmployee";
import DeshboardHR from "../pages/deshboardhr/DeshboardHR";
import HAssets from "../pages/hr/HAssets";
import AddAsset from "../pages/hr/AddAsset"
import AllRequests from "../pages/hr/AllRequests"
import EmployeeList from "../pages/hr/EmployeeList"
import UpgradePackage from "../pages/hr/UpgradePackage"
import Profile from "../pages/hr/ProfileHR"
import ProfileHR from "../pages/hr/ProfileHR";
import About from "../component/about/About";

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
        path:"/about",
        Component:About
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
  {
    path:"/deshboard/hr",
    element:<DeshboardHR></DeshboardHR>,
    children:[
      {
        path:"assets",
        element:<HAssets></HAssets>

      },
      {
        path:"add-assets",
        element:<AddAsset></AddAsset>
      },
      {
        path:"requests",
        element:<AllRequests></AllRequests>
      },
      {
        path:"employees",
        element:<EmployeeList></EmployeeList>
      },
      {
        path:"upgrade-package",
        element:<UpgradePackage></UpgradePackage>
      },
      {
        path:"profile",
        element:<ProfileHR></ProfileHR>
      }

    ]
  }
]);
export default router