import React, { Fragment, useState } from "react";
import styled from "styled-components";
import AssignmentTutors from "./Modals/AssignmentTutors/AssignmentTutors";

const H1 = styled.h1`
  color: #191919;
  font-size: 3em;
`;

const ButtonTutor = styled.button`
  background-color: #0278ae;
  font-size: 1.124em;
  color: #eeeeee;
  :hover {
    background-color: #026999;
    color: #eeeeee;
  }
`;

export default function CurrentGroup({ groupName }) {
  const [showTutors, setShowTutors] = useState(false);

  return (
    <Fragment>
      <section>
        <div className="d-flex justify-content-end pr-3 mt-3">
          <ButtonTutor
            type="button"
            className="btn"
            onClick={() => setShowTutors(true)}
          >
            Ver tutores
          </ButtonTutor>
        </div>
        <div className="d-flex justify-content-center">
          <H1 className="text-center rounded text-nowrap px-3 ">
            Mesa de juego {groupName}
          </H1>
        </div>
      </section>
      {showTutors ? <AssignmentTutors setShowTutors={setShowTutors} /> : <></>}
    </Fragment>
  );
}
