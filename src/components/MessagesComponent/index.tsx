import { Container } from "./styles";
import { MdOutlineMessage } from "react-icons/md";
import { InputComponent } from "../InputComponent";
import { UserContext } from "../../services/contextAPI";
import { useContext } from "react";

export function MessagesComponent(){
  const {NewMessage} = useContext(UserContext);
  return(
    <Container>
      <div className="wrapper">
        <strong>Messages <MdOutlineMessage/></strong>
        <InputComponent message={"Search messages"}/>
        {NewMessage.map(people => (
          <>
            {people.isUser ? "":(
              <div className="people" id={people.active ? "on" : "off"}>
                <div className="infoPeople">
                  <img src={people.ImagePeople} alt="alt" />
                  <div className="textPeople">
                    <h2>{people.name}</h2>
                    <p>{people.messageText}</p>
                  </div>
                </div>
                <button>{people.date}</button>
              </div>
            )}
          </>
        ))}
      </div>
      <div className="message">
        {NewMessage.map(people => (
          <div className={people.isUser ? "people user" : "people"} id={people.active ? "on" : "off"}>
            <div className="infoPeople">
              <img src={people.ImagePeople} alt="alt" />
              <div className="textPeople">
                <h2>{people.name}</h2>
                <p>{people.messageText}</p>
              </div>
            </div>
            <button>{people.date}</button>
          </div>
          ))}
      </div>
    </Container>
  )
}