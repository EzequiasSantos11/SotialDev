import { Routes, Route } from "react-router-dom";
import EmailConfirm from "../pages/EmailConfirm";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Notfound from "../pages/Notfound";
import SingIn from "../pages/SingIn";
import UserConfig from "../pages/UserConfig";


export function Routers(){
  return(
    <Routes>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/" element={<SingIn/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/confirm-email" element={<EmailConfirm/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/configurations" element={<UserConfig/>}/>
      <Route path="/messages" element={<Messages/>}/>
    </Routes>
   
  )
}