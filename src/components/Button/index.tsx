import { HTMLAttributes, MouseEventHandler } from "react";
import {Container} from "./styles";

type PropsButton ={
  action?: MouseEventHandler<HTMLButtonElement>;
  children: any;
}

function Button({children, action}: PropsButton){
  return(
    <Container onClick={action}>
      {children}
    </Container>
  )
}

export {Button};