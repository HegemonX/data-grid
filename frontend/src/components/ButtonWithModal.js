import React from "react";

function ButtonWithModal({ isModalShowed, children, text, onClick }) {
  return (
    <div className="ButtonBlock">
      <button className="DataGrid__action" onClick={onClick}>
        {text}
      </button>
      {isModalShowed ? children : null}
    </div>
  );
}

export default ButtonWithModal;
