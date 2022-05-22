import { Container } from "./styles";
import man from "../../../assets/man.png";
import woman from "../../../assets/woman.png";
import { AiFillLike } from "react-icons/ai";
import {BiMessageSquareDetail} from "react-icons/bi";
import {FaShareSquare} from "react-icons/fa";
import Image from "../../../assets/messageImage.png";

export function MessagePeople(){
  const PeopleAdd = [
    { ImagePeople: woman, name: "Woman user 1", office: "Developer Frontend", messageText: "teste" },
    { ImagePeople: man, name: "Woman user 1", office: "Developer Frontend", messageText: "This is my new project, I’m happy.", messageImage: Image}
  ]
  return(
    <Container>
      {PeopleAdd.map(people => (
        <div className="messagePeople">
          <div className="people">
            <div className="infoPeople">
              <img src={people.ImagePeople} alt="alt" />
              <div className="textPeople">
                <h2>{people.name}</h2>
                <p>{people.office}</p>
                <p>2h</p>
              </div>
            </div>
            <button>+ Follow</button>
          </div>
          <div className="message">
            <p>{people.messageText}</p>
            <img style={{display: people.messageImage ? "flex" : "none"}} src={people.messageImage} alt="" />
          </div>
          <div className="allReactions">
            <span>
              <AiFillLike/>
              100
              like
            </span>
            <span>
              <BiMessageSquareDetail/>
              20
              coment
            </span>
            <span>
              <FaShareSquare/>
              5
              share
            </span>
          </div>
          <div className="newReaction">
            <button><AiFillLike/>like</button>
            <button><BiMessageSquareDetail/>coment</button>
            <button><FaShareSquare/>share</button>
          </div>
        </div>
      ))}
    </Container>
  )
}