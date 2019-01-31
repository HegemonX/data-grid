import React from "react";
import "./style/Modal.scss";

function Modal(props) {
  return (
    <div className="Modal">
      <div className="Modal__message">
        <div className="Modal__close" onClick={props.onClose} />
        <div className="Modal__content">{props.children}</div>
      </div>
    </div>
  );
}

export default Modal;
