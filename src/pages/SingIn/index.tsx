import { Button } from "../../components/Button";
import { Container } from "../../style/SingInStyles";
import {FcGoogle} from "react-icons/fc";
import {AiOutlineGithub} from "react-icons/ai";
import BackImage from "../../assets/Background.png";
import { Link } from "react-router-dom";

export default function SingIn(){
  return(
    <Container>
      <div className="background">
        <img src={BackImage} alt="" />
      </div>
      <div className="singIn">
        <h1>SotialDev</h1>
        <div className="sotialLogin">
          <Link to={"/login"} className="link">
            <a>
              <Button >
                <FcGoogle/>
                use Google account
              </Button>
            </a>
          </Link>
          <Link className="link" to={"/login"}>
            <a>
              <Button>
                <AiOutlineGithub/>
                use GitHub account
              </Button>
            </a>
          </Link>
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
          <Link to={"/login"}>
            <a href="">
              <Button>
                Create
              </Button>
            </a>
          </Link>
          <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </form>
      </div>
    </Container>
  )
}