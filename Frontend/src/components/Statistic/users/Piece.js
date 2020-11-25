import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const P = styled.p`
  background-color: #0278ae;
  color: #eeeeee;
  font-weight: 500;
  font-size: 1.27em;
`;

export default function Piece({ title, score }) {
  return (
    <div className="d-flex justify-content-around">
      <p className="w-50 text-nowrap font-weight-normal pl-4">{title}</p>
      <div className="d-flex text-center justify-content-center w-50">
        <P className="rounded point w-25">{score}</P>
      </div>
    </div>
  );
}
