import React from "react";

interface ButtonProps {
  text: string;
  action: string;
}

export default function ButtonSubmit(props: ButtonProps) {
  return <button>{props.text}</button>;
}

export {};
