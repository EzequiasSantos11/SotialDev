import {BsFillImageFill} from "react-icons/bs";
import UserPhoto from "../../assets/user-photo.png";
import { Container, Main } from "../../style/HomeStyles"; 
import { MessagePeople } from "../../components/Peoples/MessagePeople";
import { MdOutlineVideoLibrary, MdPublish } from "react-icons/md";
import {useContext} from "react";
import {UserContext} from "../../services/contextAPI";
import { Aside } from "../../components/Aside";

export default function Home() {
  const {user} = useContext(UserContext);
  return (
    <Container>
      <div className="wrapper">
        <Aside/>
        <Main>
          <div className="body">
            <MessagePeople/>
          </div>
        </Main>
      </div>
    </Container>
  )
}