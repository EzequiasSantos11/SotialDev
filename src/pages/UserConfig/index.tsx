import { Container } from "../../style/UserConfigStyles";
import Banner from "../../assets/banner-user.png";
import UserPhoto from "../../assets/user-photo.png";

export default function UserConfig(){
  return(
    <Container>
      <div className="wrapper">
          <img src={Banner} alt=""/>
        <div className="userInfos">
          <div className="photoprofile">
            <img src={UserPhoto} alt="" />
            <span>Click to change</span>
          </div>
          <form>
            <div className="input fistName">
              <label>Fist name</label>
              <input type="text" value={"User"}/>
            </div>
            <div className="input lastName">
              <label>Last name</label>
              <input type="text" value={"Testing"}/>
            </div>
            <div className="input Company">
              <label>Company</label>
              <input type="text" />
            </div>
            <div className="input Position">
              <label>Position</label>
              <input type="text" value={"Developer"}/>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}