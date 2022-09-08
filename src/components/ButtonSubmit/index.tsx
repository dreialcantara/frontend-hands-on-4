import React from "react";

interface ButtonProps {
  text: string;
  action: any;
  className: string;
}

export default function ButtonSubmit(props: ButtonProps) {
  return (
    <button
      className="btn btn-primary p-1 w-100 #76BB4C mb-3"
      type={props.action}
    >
      {props.text}
    </button>
  );
}

export {};
