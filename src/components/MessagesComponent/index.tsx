import { Container } from "./styles";
import { MdOutlineMessage, MdOutlineVideoLibrary } from "react-icons/md";
import { InputComponent } from "../InputComponent";
import { UserContext } from "../../services/contextAPI";
import { useContext } from "react";
import { Button } from "../Button";
import { BsFillImageFill } from "react-icons/bs";

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
              <div className="people" key={people.id} id={people.active ? "on" : "off"}>
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
      <div className="messagesWrapper">
        <div className="message">
          {NewMessage.map(people => (
            <div key={people.id} className={people.isUser ? "people user" : "people"} id={people.active ? "on" : "off"}>
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
        <div className="newTextMessage">
          <textarea placeholder="write your message" cols={29} rows={9}></textarea>
          <div className="mideaMessage">
            <Button>
              <BsFillImageFill/>
              picture
            </Button>
            <Button>
              <MdOutlineVideoLibrary/>
              video
            </Button>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}