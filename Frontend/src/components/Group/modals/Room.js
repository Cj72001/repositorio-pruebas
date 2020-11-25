import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ButtonEnd = styled.button`
  color: #eeeeee;
  background-color: #fd4040;

  :hover {
    color: #eeeeee;
    background-color: #fc3535;
  }
`;

const ButtonStart = styled.button`
  background-color: #0278ae;
  color: #eeeeee;
`;

export default function Room({ setShowModal, title }) {
  return (
    <Modal show={true} onHide={() => setShowModal(false)}>
      <Modal.Header>
        <Modal.Title>¿Deseas finalizar la sala {title}?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
          <ButtonEnd
            type="button"
            className="btn mr-3"
            onClick={() => setShowModal(false)}
          >
            Finalizar
          </ButtonEnd>
          <ButtonStart
            type="button"
            className="btn ml-3"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </ButtonStart>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <h6 className="pl-3 text-left">
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
          Algunas salas pueden estar activas.
        </h6>
      </Modal.Footer>
    </Modal>
  );
}
