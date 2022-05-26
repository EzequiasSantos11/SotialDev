import { Container } from "../../style/UserConfigStyles";
import Banner from "../../assets/banner-user.png";
import { HTMLInputTypeAttribute, useContext, useState } from "react";
import { UserContext } from "../../services/contextAPI";

type DataProps ={
  fullName?: string,
  company?: string,
  position?: string
}

export default function UserConfig(){
  const {user} = useContext(UserContext);
  const [data, setData] = useState<DataProps>({
    fullName: user?.name,
    company: "Onde você trabalha?",
    position: "Em qual área você brilha mais?"
  });
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    setData({[e.currentTarget.name]: [e.currentTarget.value]});
  };
  return(
    <Container>
      <div className="wrapper">
          <img src={Banner} alt=""/>
        <div className="userInfos">
          <div className="photoprofile">
            <img src={user?.avatar} alt="" />
            <span>Click to change</span>
          </div>
          <form>
            <div className="input lastName">
              <label>Full name</label>
              <input type="text" name="fullName" onChange={handleInput} value={data.fullName}/>
            </div>
            <div className="input Company">
              <label>Company</label>
              <input type="text" name="company" onChange={handleInput} value={data.company} />
            </div>
            <div className="input Position">
              <label>Position</label>
              <input type="text" name="position" onChange={handleInput} value={data.position}/>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}