import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const PPoint = styled.p`
  font-size: 3em;
`;

const PScore = styled.p`
  font-size: 5.78em;
`;

export default function Score({ score }) {
  return (
    <Container className="d-flex flex-column align-items-center">
      <PPoint>Puntuación:</PPoint>
      <PScore className="font-weight-bold text-center">{score} puntos</PScore>
    </Container>
  );
}
