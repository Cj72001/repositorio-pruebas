import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const ButtonEnd = styled.button`
  color: #eeeeee;
  background-color: #fd4040;

  :hover {
    color: #eeeeee;
    background-color: #fc3535;
  }
`;

const ButtonCreate = styled.button`
  background-color: #0278ae;
  color: #eeeeee;
  :hover {
    color: #eeeeee;
  }
`;

export default function NewGroup({
  setShowModal,
  cards,
  setCards,
  expiration,
  setExpiration,
  route,
  cardName,
  belong
}) {


  const [title, setTitle] = useState("");
  const [message, setMesagge] = useState("");
  const API = "http://localhost:3001";

  const createTable = async (title, expiration, belong) => {
    console.log(belong)
    const response = await fetch(`${API}${route}`, {
      method: "post",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ title, expiration,belong }),
    });
    const responseJSON = await response.json();
    if (!responseJSON) return { error: "We cannot connect" };
    else {
      if (responseJSON.error) {
        return responseJSON;
      } else {
        return { success: true };
      }
    }
  };

  const verifyName = (currentName) => {
    let exist = false;
    cards.forEach(({ title }) => {
      if (title === currentName) exist = true;
    });

    return exist;
  };

  const handleGroupAdd = async (e) => {
    e.preventDefault();

    let tmpTitle = title.trimEnd().toLowerCase();

    if (tmpTitle === "") {
      setMesagge(`Por favor ingresa el nombre de la ${cardName}`);
      return;
    }


    if (tmpTitle.includes(cardName.toLowerCase())) {
      setMesagge(`Por favor no incluyas la palabra ${cardName}`);
      return;
    }

    tmpTitle = title.replace(" ", "");

    const existName = verifyName(tmpTitle);

    if (existName) {
      setMesagge('Ese nombre ya existe');
      return;
    }

    setTitle(tmpTitle);

    const defaultGroup = {
      title,
      expiration,
    };

    const response = await createTable(title, expiration,belong);
    if (response.error) {
      return
    } 

    const totalCards = cards.concat(defaultGroup);
    setCards(totalCards);
    setShowModal(false);
  };

  const handleTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  return (
    <Modal show={true} onHide={() => setShowModal(false)}>
      <Modal.Header className='d-flex justify-content-center'>
        <h1 >Rellena los campos</h1>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group mx-auto">
            <input
              type="text"
              value={title}
              className="form-control mb-2"
              placeholder={`Nombre de la ${cardName.toLowerCase()}`}
              onChange={handleTitle}
            />
            <select
              className="custom-select mt-2"
              onChange={(e) => setExpiration(e.target.value)}
            >
              <option defaultValue="24">
                Selecciona el tiempo de duración
              </option>
              <option defaultValue="24">24h</option>
              <option defaultValue="12">12h</option>
              <option defaultValue="6">6h</option>
            </select>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <ButtonCreate
              type="submit"
              className="btn mx-2 w-25"
              onClick={handleGroupAdd}
            >
              Agregar
            </ButtonCreate>
            <ButtonEnd
              type="button"
              className="btn mx-2 w-25"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </ButtonEnd>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <p>
          {message === "" ? (
            <></>
          ) : (
            <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
          )}
          {message}
        </p>
      </Modal.Footer>
    </Modal>
  );
}
