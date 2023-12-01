import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
  const [show, setShow] = useState(false);

  const toggleModal = (e) => {
    setShow(true);
  };

  const toggleClose = (e) => {
    const modal = document.getElementById("modaldemo1");
    modal.classList.remove("show");
    modal.removeAttribute("aria-modal");
    modal.setAttribute("aria-hidden", "true");
    setShow(false);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        style={props.style}
        id={props.id}
        className={`btn ripple ${props.color} btn-${props.size}`}
        data-target="#modaldemo1"
        data-toggle="modal"
        href="#"
      >
        <i className={`${props.icon} mr-3`}></i>
        {props.name}
      </button>

      <div
        className="modal"
        id="modaldemo1"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content modal-content-demo">
            <div className="modal-header">
              <h6 className="modal-title">{props.title}</h6>
              <button
                aria-label="Close"
                onClick={toggleClose}
                className="close"
                data-dismiss="modal"
                type="button"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              {props.button}
              <button
                className="btn ripple btn-secondary"
                data-dismiss="modal"
                onClick={toggleClose}
                type="button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ModalComponent;
