import CardFeed from "../../components/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./styles.css";

const profileimg = require("../../img/profileimg.png");
const imgfriend = require("../../img/imgfriend.png");

function GridFeed() {
  return (
    <Container className="w-100 h-100 ">
      <Row>
        <Col></Col>
        <Col
          xs={6}
          className="pt-5 d-flex justify-content-evenly border-start border-end "
        >
          <div>
            <img alt="" src={profileimg} className="" />
          </div>
          <Form.Control
            maxLength={120}
            as="textarea"
            type="text"
            className="w-75 h-100 border-success"
          />{" "}
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col
          xs={6}
          className="pt-2 p-4 d-flex justify-content-end border-start border-end border-bottom "
        >
          <Button className="buttonpost rounded-pill border-0">publicar</Button>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col
          xs={6}
          className="pt-2 p-4 d-flex  border-start border-end border-bottom "
        >
          <img alt="" src={imgfriend} className="" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default GridFeed;

<Row></Row>;
