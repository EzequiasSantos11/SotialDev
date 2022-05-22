import {Container} from "./styles";

type PropsButton={
  children: React.ReactNode;
}

function Button({children}: PropsButton){
  return(
    <Container>
      {children}
    </Container>
  )
}

export {Button};