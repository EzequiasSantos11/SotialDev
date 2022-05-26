import { SearchPeople } from "../Peoples/SearchPeople";
import Banner from "../../assets/banner-user.png";
import { Container } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../services/contextAPI";

export function Aside() {
  const {user} = useContext(UserContext);
  
  return (
    <Container>
      <div className="banner">
        <img src={Banner} alt="imagem de banner do perfil" />
      </div>
      <div className="profile">
        <img className="userImage" src={user?.avatar} alt="" />
        <h1>{user?.name}</h1>
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
      <SearchPeople placehoderMessage="Search people" />
    </Container>
  )
}