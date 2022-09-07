import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "./styles.css";

const profileimg = require("../../img/profileimg.png");

function CardPost() {
  return (
    <Card className="d-flex w-50 border-top-0 rounded-0 mt-1">
      <Card.Title></Card.Title>
      <Card.Body>
        <div className="d-flex justify-content-evenly">
          <img alt="" src={profileimg} className="" />{" "}
          <Form.Control
            maxLength={120}
            as="textarea"
            type="text"
            className="w-75 h-auto border-success"
          />
        </div>
        <div className="d-flex justify-content-end mt-2">
          <Button className="buttonpost alignt-item-end rounded-pill border-0">
            publicar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
