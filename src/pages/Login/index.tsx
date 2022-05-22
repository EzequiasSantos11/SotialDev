import { Button } from "../../components/Button";
import { Container } from "../../style/LoginStyles";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineGithub} from "react-icons/ai";
import BackImage from "../../assets/Background.png";
import { Link } from "react-router-dom";


export default function Login(){
  return(
    <Container>
      <div className="background">
        <img src={BackImage} alt="" />
      </div>
      <div className="singIn">
        <h1>SotialDev</h1>
        <form>
          <div className="input emailInput">
            <label>Email</label>
            <input type="email"/>
          </div>
          <div className="input passwordInput">
            <div className="cabecalho">
              <label>Password</label>
              <span>Forgot your password?</span>
            </div>
            <input type="password" />
          </div>
        </form>
        <div className="sotialLogin">
          <Link to={"/login"}>
            <a>
              <Button >
                <FcGoogle/>
                use Google account
              </Button>
            </a>
          </Link>
          <Link className="link" to={"/home"}>
            <a>
              <Button>
                <AiOutlineGithub/>
                use GitHub account
              </Button>
            </a>
          </Link>
        </div>
        <a href="">
          <Button>
            Login
          </Button>
        </a>
        <a className="createNew" href="">
          <Button>
            Create your account
          </Button>
        </a>
      </div>
    </Container>
  )
}