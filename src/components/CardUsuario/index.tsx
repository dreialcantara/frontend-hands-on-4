import Card from "react-bootstrap/Card";
import "./styles.css";

const profileimg = require("../../img/profileimg.png");

function CardUsuario() {
  return (
    <Card className="d-flex box-information rounded-0 border-top-0">
      <div className="avatar-information">
        <img className="img-fluid" src={profileimg} alt="imagem de usuário" />
      </div>
      <div className="user-information">
        <Card.Title>
          <div className="d-flex">
            <div className="flex-column">
              <h3><span>nome</span> <span>sobrenome</span></h3>
              <ul>
                <li>Matheus 82</li>
                <li>user@email.com</li>
                <li><span>3</span> publicações</li>
              </ul>
            </div>
          </div>
        </Card.Title>
      </div>
    </Card>
  );
}

export default CardUsuario;