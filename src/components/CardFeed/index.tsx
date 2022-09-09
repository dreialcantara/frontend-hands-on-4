import Card from "react-bootstrap/Card";

import "./styles.css";

const imgfriend = require("../../img/imgfriend.png");

function CardFeed() {
  return (
    <Card className="d-flex w-100 sm-w-100 rounded-0 border-top-0 border-end-0 border-start-0   ">
      <Card.Body className="d-flex">
        <img src={imgfriend} className="imgfriend align-self-center " alt="" />
        <div className="d-flex w-0 h-0 mb-2 ">
          <div className="d-flex flex-column ">
            <div className="d-flex flex-column">
              <span className="nomeap mt-1 w-75">Vinicius - apê 42</span>
              <span className="datapost mb-0">10/06/2022 09:00</span>
            </div>
            <div className="txtpost mt-2">
              <span className=" w-100">
                Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém
                usando furadeira 2 HORAS DA MANHÃ!!! ó_ó
              </span>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardFeed;
