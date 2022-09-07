import React from "react";

interface ButtonProps {
  text: string;
  action: string;
  className: string;
}

export default function ButtonSubmit(props: ButtonProps) {
  return (
    <button className="btn btn-primary p-1 w-100 #76BB4C mb-3">
      {props.text}
    </button>
  );
}

export {};
