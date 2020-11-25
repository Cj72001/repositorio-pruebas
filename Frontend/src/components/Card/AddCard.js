import React, { Fragment, useState } from "react";
import Agregar from "img/agregar.png";
import styled from "styled-components";
import NewGroup from "components/Group/modals/NewGroup";

const GroupContent = styled.div`
  background-color: #0278ae;
  color: #eeeeee;
  border: 0.6px solid #0278ae;
  margin: 0 8px;
  box-shadow: -6px 6px 5px #a09e9e;
`;

export default function AddCard({
  cards,
  setCards,
  expiration,
  setExpiration,
  route,
  cardName,
  belong
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <GroupContent className="col rounded my-2 d-flex justify-content-center align-items-center">
        <div>
          <img
            onClick={() => setShowModal(true)}
            src={Agregar}
            className="w-100 h-100 py-3 my-3"
            alt="Agregar sala"
          />
        </div>
      </GroupContent>
      {showModal ? (
        <NewGroup
          setShowModal={setShowModal}
          cards={cards}
          setCards={setCards}
          expiration={expiration}
          setExpiration={setExpiration}
          route={route}
          cardName={cardName}
          belong={belong}
        />
      ) : (
        <></>
      )}
    </Fragment>
  );
}
