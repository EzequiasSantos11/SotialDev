import { Button } from "../../components/Button";
import { Container } from "../../style/SingInStyles";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineGithub} from "react-icons/ai";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BackImage from "../../assets/Background.png";
import { UserContext } from "../../services/contextAPI";

export default function SingIn(){
  const { loginGithub, loginGoogle } = useContext(UserContext);
  const createAccount = () => {
    alert("Esta função ainda não foi implementada, por favor faça login com uma de suas redes sociais a baixo!");
  }
  return(
    <Container>
      <div className="background">
        <img src={BackImage} alt="" />
      </div>
      <div className="singIn">
        <h1>SotialDev</h1>
        <div className="sotialLogin">
          <Button action={loginGoogle}>
            <FcGoogle/>
            use Google account
          </Button>
          <Button action={loginGithub}>
            <AiOutlineGithub/>
            use GitHub account
          </Button>
        </div>
        <span>or</span>
        <form>
          <div className="input nameInputs">
            <div className="firstName">
              <label>First name</label>
              <input type="text"/>
            </div>
            <div className="lastName">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className="input emailInput">
            <label>Email</label>
            <input type="email"/>
          </div>
          <div className="input userNameInput">
            <label>Username <span>(only letters, numbers, and underscores)</span></label>
            <input type="text" />
          </div>
          <div className="input passwordInput">
            <label>Password <span>(min. 8 char)</span></label>
            <input type="password" />
          </div>
          <Button action={createAccount}>
            Create
          </Button>
          <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </form>
      </div>
    </Container>
  )
}