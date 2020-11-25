import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
//import Room from "./modals/Room";

const ButtonEnd = styled.button`
  color: #eeeeee;
  background-color: #fd4040;
  border: 0.7px solid #447287;
  :hover {
    color: #eeeeee;
  }
`;

const ButtonStart = styled.button`
  background-color: #0278ae;
  color: #eeeeee;
`;

const P = styled.p`
  font-size: 2.47em;
`;

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <header className="container d-flex justify-content-between align-items-end mt-3 pr-5">
        <div className="d-flex justify-content-center py-2 h-75">
          <P className="p-1 m-0 font-weight-bolder text-uppercase">rooms</P>
        </div>
        <div className="d-flex justify-content-start py-2 h-75">
          <ButtonEnd
            type="button"
            className="btn mx-1"
            onClick={() => setShowModal(true)}
          >
            Finalizar
          </ButtonEnd>
          <ButtonStart type="button" className="btn ml-1">
            Comenzar
          </ButtonStart>
        </div>
      </header>
      {/*showModal ? <Room setShowModal={setShowModal} title={room} /> : <></>*/}
    </Fragment>
  );
}
