import { Button } from "../../components/Button";
import { Container } from "../../style/EmailConfirmStyles";
import BackImage from "../../assets/Background.png";


export default function EmailConfirm(){
  return(
    <Container>
      <div className="background">
        <img src={BackImage} alt="" />
      </div>
      <div className="singIn">
        <h1>SotialDev</h1>
        <div className="message">
          <p>Enter the email address associated with your account and we’ll send you a link to reset your password.</p>
        </div>
        <form>
          <div className="input emailInput">
            <label>Email</label>
            <input type="email"/>
          </div>
        </form>
        <a href="">
          <Button>
            Send password reset instructions
          </Button>
        </a>
      </div>
    </Container>
  )
}