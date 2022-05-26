import {BsFillImageFill} from "react-icons/bs";
import { Header } from "../../components/Header";
import Banner from "../../assets/banner-user.png";
import UserPhoto from "../../assets/user-photo.png";
import { SearchPeople } from "../../components/Peoples/SearchPeople";
import { MessagesComponent } from "../../components/MessagesComponent";
import { MdOutlineVideoLibrary, MdPublish } from "react-icons/md";
import { Container,  Main } from "../../style/MessagesStyles"; 
import { Aside } from "../../components/Aside";

export default function Messages() {

  return (
    <Container>
      <div className="wrapper">
        <Aside/>
        <Main>
          <div className="body">
            <MessagesComponent/>
          </div>
        </Main>
      </div>
    </Container>
  )
}