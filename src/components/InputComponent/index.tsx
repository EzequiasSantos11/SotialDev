import { AiOutlineSearch } from "react-icons/ai";
import {Container} from "./styles";

type SearchTypes ={
  message: string,
}

export function InputComponent({message}: SearchTypes) {
  return (
    <Container>
      <div className="search">
        <label >
          <AiOutlineSearch />
        </label>
        <input type="search" placeholder={message} name="" id="" />
      </div>
    </Container>
  )
}