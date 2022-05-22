import {Button} from "../../components/Button";
import {Link} from "react-router-dom";
import { Container } from "../../style/NotFound";

export default function Notfound(){
  return(
    <Container>
      <h1>404 Page not found</h1>
      <Link to={"/"}>
        <a>
          <Button>
            Comeback Home
          </Button>
        </a>
      </Link>
    </Container>
  )
}