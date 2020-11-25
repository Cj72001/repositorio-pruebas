import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Table from "components/Group/modals/Table";

const ButtonLink = styled.button`
  color: #eeeeee;
  background-color: transparent;
  font-size: 1.43em;

  :hover {
    color: #dedcdc;
  }
`;

const Title = styled.h1`
  color: #eeeeee;
  font-size: 2.1em;
`;

const TitleWrapper = styled.div`
  height: 35%;
`;

const BodyWrapper = styled.div`
  height: 45%;
`;

const FooterWrapper = styled.div`
  height: 20%;
`;

const GroupContent = styled.div`
  background-color:${(props) => (props.visible ? "#0278ae;" : "#51adcf;")}
  color: #eeeeee;
  border: 0.6px solid #0278ae;
  margin: 0 8px;
  box-shadow: -6px 6px 5px #a09e9e;

`;

const ButtonEnd = styled.button`
  color: #eeeeee;
  background-color: #fd4040;
  visibility: ${(props) => (props.visible ? "visible;" : "hidden;")}

  :hover {
     color: #eeeeee;
     background-color: #fc3535;
  }
`;

const ButtonStart = styled.button`
  background-color: #e0e0e0;
  color: #191919;
  visibility: ${(props) => (props.visible ? "visible;" : "hidden;")};
`;

export default function CardBody({
  cardName,
  name,
  expiration,
}) {
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const redirectLink =
    cardName.toLowerCase() === "sala"
      ? `/group?room=${name}`
      : "/group/game-table";

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      <GroupContent
        visible={showButton}
        className="col rounded my-2"
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        <TitleWrapper>
          <Title className="text-center pb-2 ">{cardName + " " + name}</Title>
        </TitleWrapper>
        <BodyWrapper className="d-flex flex-column px-3">
          <ButtonEnd
            visible={showButton}
            id="btn-end-group"
            type="button"
            className="btn my-1 font-weight-bolder"
            onClick={handleShowModal}
          >
            Terminar
          </ButtonEnd>
          <Link to={redirectLink}>
            <ButtonStart
              visible={showButton}
              type="button"
              className="btn my-1 font-weight-bolder w-100"
              onClick={handleCloseModal}
            >
              Entrar
            </ButtonStart>
          </Link>
        </BodyWrapper>
        <FooterWrapper className="d-flex justify-content-between align-items-center">
          <p className="pl-1 text-center text-uppercase">
            Expira: {expiration}{" "}
          </p>
          <ButtonLink type="button" className="btn h-100 p-0 pb-2 mb-2">
            <FontAwesomeIcon icon={faLink} />
          </ButtonLink>
        </FooterWrapper>
      </GroupContent>
      {showModal ? (
        <Table setShowModal={setShowModal} title={name} cardName={cardName} />
      ) : (
        <></>
      )}
    </Fragment>
  );
}
