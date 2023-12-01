import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

const SystemModal = (props) => {
  useEffect(() => {
    openModal();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal size={props.size} centered show={modalIsOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        {props.footer && <props.footer close={closeModal} />}
      </Modal.Footer>
    </Modal>
  );
};

export default SystemModal;
