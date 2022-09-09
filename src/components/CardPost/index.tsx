import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { createPost } from "../../services/MainApi/createMorador";
import { useSelector } from "react-redux";

import "./styles.css";
import { RootStore } from "../../store";

const profileimg = require("../../img/profileimg.png");

function CardPost() {
  const [content, setContent] = useState<string>("");
  const user = useSelector((store: RootStore) => store.userReduce);

  const post = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      content,
      user: user.idUser,
    };

    console.log(payload);
    try {
      const response = await createPost(payload);
      if (response.status !== 201) {
        return alert("Algo está errado");
      }
      alert("Postado!");
    } catch (error) {
      alert("Algo está errado");
    }
  };

  return (
    <Card className="d-flex w-100 border-top-0 border-end-0 border-start-0 rounded-0 mt-1">
      <Card.Title></Card.Title>
      <Card.Body>
        <Form onSubmit={post}>
          <div className="d-flex justify-content-evenly">
            <img alt="" src={profileimg} className="" />{" "}
            <Form.Control
              maxLength={120}
              as="textarea"
              onChange={(event) => setContent(event.target.value)}
              value={content}
              type="text"
              className="w-75 h-auto border-success"
            />
          </div>
          <div className="d-flex justify-content-end mt-2">
            <Button
              type="submit"
              className="buttonpost alignt-item-end rounded-pill border-0"
            >
              publicar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CardPost;
