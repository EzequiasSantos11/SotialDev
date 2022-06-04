import { Routes, Route, Navigate } from "react-router-dom";
import EmailConfirm from "../pages/EmailConfirm";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Messages from "../pages/Messages";
import Notfound from "../pages/Notfound";
import SingIn from "../pages/SingIn";
import UserConfig from "../pages/UserConfig";


function RequireAuth({ children }: { children: JSX.Element }) {
  const user = localStorage.getItem("user");
  if (user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return children;
  }else{
    return <Navigate to="/"  />;
  }

}

export function Routers(){
  return(
    <Routes>
      <Route path="*" element={<Notfound/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={
          <Home/>
      }/>
      <Route path="/create-account" element={<SingIn/>}/>
      <Route path="/confirm-email" element={ 
          <EmailConfirm/>
      }/>
      <Route path="/configurations" element={ 
          <UserConfig/>
      }/>
      <Route path="/messages" element={ 
          <Messages/>
      }/>
    </Routes>
   
  )
}
