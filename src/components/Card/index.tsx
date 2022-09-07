import Card from "react-bootstrap/Card";

const imgfriend = require("../../img/imgfriend.png");

function CardFeed() {
  return (
    <Card className="d-flex w-50 rounded-0 border-top-0">
      <Card.Title>
        <div className="d-flex">
          <img className="img-fluid" src={imgfriend} alt="imagem de usuário" />
          <div className="flex-column">
            <p>Vinicius - apê 42</p>
            <p>10/06/2022 09:00</p>
          </div>
        </div>
      </Card.Title>
      <Card.Body>
        Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando
        furadeira 2 HORAS DA MANHÃ!!! ó_ó
      </Card.Body>
    </Card>
  );
}

export default CardFeed;
