import React from "react";

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.type} mg-b-10`} role="alert">
      <div className="alert-text">{props.message}</div>
    </div>
  );
}
