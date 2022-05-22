import {AiOutlineSearch, AiFillHome} from "react-icons/ai";
import {MdOutlineMessage} from "react-icons/md";
import {TiArrowSortedDown} from "react-icons/ti";
import UserImage from "../../assets/user-photo.png";
import Logo from "../../assets/mini-logo.png";
import { Container } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header(){
  const [openOptions, setOpenOptions] =  useState(false)
  return(
    <Container>
      <div className="navInfo">
        <img src={Logo} alt="" />
        <div className="search">
          <label>
            <AiOutlineSearch/>
            Search
          </label>
          <input type="search" />
        </div>
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
      </div>
      <div className="userInfo" onClick={()=>setOpenOptions(!openOptions)}>
        <img src={UserImage} alt="" />
        <TiArrowSortedDown />
        <p>Me</p>
        <div onClick={()=>setOpenOptions(false)} className={openOptions ? "open" : "optionsUser"} >
          <Link to={"/configurations"}>
            <a>Configurations</a>
          </Link>
          <Link to={"/"}>
            <a>Logout</a>
          </Link>
        </div>
      </div>
    </Container>
  )
}