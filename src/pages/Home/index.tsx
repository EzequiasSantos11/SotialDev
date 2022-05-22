import {BsFillImageFill} from "react-icons/bs";
import { Header } from "../../components/Header";
import Banner from "../../assets/banner-user.png";
import UserPhoto from "../../assets/user-photo.png";
import { Container, Aside, Main } from "../../style/HomeStyles"; 
import { SearchPeople } from "../../components/Peoples/SearchPeople";
import { MessagePeople } from "../../components/Peoples/MessagePeople";
import { MdOutlineVideoLibrary, MdPublish } from "react-icons/md";

export default function Home() {

  return (
    <Container>
      <div className="wrapper">
        <Aside>
          <div className="banner">
            <img src={Banner} alt="imagem de banner do perfil" />
          </div>
          <div className="profile">
            <img className="userImage" src={UserPhoto} alt="" />
            <h1>User Tasting</h1>
            <p>Developer</p>
          </div>
          <span className="separator"></span>
          <div className="userInfos">
            <div className="information">
              <p>My Projects</p>
              <span>15</span>
            </div>
            <div className="information">
              <p>My Articles</p>
              <span>18</span>
            </div>
            <div className="information">
              <p>My Connections</p>
              <span>200</span>
            </div>
          </div>
          <span className="separator"></span>
          <SearchPeople placehoderMessage="Search people"/>
        </Aside>
        <Main>
          <div className="header">
            <img src={UserPhoto} alt="" />
            <input type="text" placeholder="What are your working on?"/>
            <div className="actions">
              <button>
               <BsFillImageFill/>
                picture
              </button>
              <button>
                <MdOutlineVideoLibrary/>
                video
              </button>
              <button>
                <MdPublish/>
                publish
              </button>
            </div>
          </div>
          <div className="body">
            <MessagePeople/>
          </div>
        </Main>
      </div>
    </Container>
  )
}