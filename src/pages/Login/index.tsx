import { Button } from "../../components/Button";
import { Container } from "../../style/LoginStyles";
import { FcGoogle } from "react-icons/fc";
import BackImage from "../../assets/Background.png";
import { Link } from "react-router-dom";
import Moon from "../../assets/moon.png";
//Importações firebase (separar em outro arquivo mais tarde).
import { useContext } from "react";
import { UserContext } from "../../services/contextAPI";

//Logo irei implementar a autenticação com Github por aqui.

export default function Login() {
  const { loginGoogle} = useContext(UserContext);
  return (
    <Container>
      <div className="background">
        <img src={BackImage} alt="" />
      </div>
      <div className="login">
        <div className="logo">
          <img src={Moon} alt="" />
          <h1>Moon</h1>
        </div>
          <strong>Entre em sua conta para conversar!</strong>
        <div className="actions">
          {/* <Button action={loginGithub}>
            <AiOutlineGithub />
            Login with a github
          </Button> */}
          <Button action={loginGoogle}>
            <FcGoogle />
            use Google account
          </Button>
        </div>
        <span className="separator">or</span>
        <span className="createNew">
          You not have account?
          <Link to={"/create-account"}>
            <a>
              Create your account.
            </a>
          </Link>
        </span>
      </div>
    </Container>
  )
}