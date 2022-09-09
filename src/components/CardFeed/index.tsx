import Card from "react-bootstrap/Card";
import "./styles.css";

const profileimg = require("../../img/profileimg.png");
let publicacoes = true;

function CardFeed() {
  return (
    <Card className="d-flex box-information rounded-0 border-top-0">
      {(publicacoes
        ? <div className="d-flex">
            <div className="avatar-information">
              <img className="img-fluid" src={profileimg} alt="imagem de usuário" />
            </div>
            <div className="user-information">
              <Card.Title>
                <div className="d-flex">
                  <div className="flex-column">
                    <div className="author-information">
                      <p className="name">name</p>
                      <p>description</p>
                  </div>
                  <div className="publicacao">
                    <p>conteudo publicacao</p>
                  </div>
                  </div>
                </div>
              </Card.Title>
            </div>
          </div>

        : <div>
          <p>Voce ainda nao fez nenhuma publicacao</p>
        </div>
      )}
    </Card>
  );
}

export default CardFeed;
