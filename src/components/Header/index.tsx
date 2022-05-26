import { AiFillHome} from "react-icons/ai";
import {MdOutlineMessage} from "react-icons/md";
import Logo from "../../assets/mini-logo.png";
import { Container } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../services/contextAPI";

export function Header(){
  const [openOptions, setOpenOptions] =  useState(false);
  const {user, signOutAllAccounts} = useContext(UserContext);
  return(
    <Container>
      <img src={Logo} alt="" />
      <nav>
        <ul>
          <li>
            <Link to={"/home"}>
              <a>
                <AiFillHome/>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to={"/messages"}>
              <a>
                <MdOutlineMessage/>
                Messages
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="userInfo" onClick={()=>setOpenOptions(!openOptions)}>
        <div className="user">
          <img src={user?.avatar} alt="" />
        </div>
        <div onClick={()=>setOpenOptions(false)} className={openOptions ? "open" : "optionsUser"} >
          <Link to={"/configurations"}>
            <a>Configurations</a>
          </Link>
          <a onClick={signOutAllAccounts}>Logout</a>
        </div>
      </div>
    </Container>
  )
}