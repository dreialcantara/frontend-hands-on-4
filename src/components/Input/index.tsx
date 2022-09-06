import Form from "react-bootstrap/Form";

import "bootstrap/dist/css/bootstrap.min.css";

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
}

function Input(props: InputProps) {
  return (
    <Form.Control
      type={props.type}
      placeholder={props.placeholder}
      className="mb-2 text-center w-75"
    />
  );
}

export default Input;
