import { AiOutlineSearch } from "react-icons/ai";
import { Container } from "./styles";
import man from "../../../assets/man.png";
import woman from "../../../assets/woman.png";

type SeachTypes ={
  placehoderMessage: string,
}

export function SearchPeople({placehoderMessage}: SeachTypes) {
  const PeopleAdd = [
    { ImagePeople: woman, name: "Woman user 1", office: "Developer Frontend" },
    { ImagePeople: man, name: "Woman user 1", office: "Developer Frontend" },
    { ImagePeople: woman, name: "Man user 2", office: "Developer Frontend" },
    { ImagePeople: man, name: "Man user 2", office: "Developer Frontend" },
  ]

  return (
    <Container className="container">
      <div  className="search">
        <label >
          <AiOutlineSearch />
        </label>
        <input type="search" placeholder={placehoderMessage} name="" id="" />
      </div>
      {PeopleAdd.map(people => (
        <div className="people">
          <div className="infoPeople">
            <img src={people.ImagePeople} alt="alt" />
            <div className="textPeople">
              <h2>{people.name}</h2>
              <p>{people.office}</p>
            </div>
          </div>
          <button>+ Follow</button>
        </div>
      ))}
    </Container>
  )
}