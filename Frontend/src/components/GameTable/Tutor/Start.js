import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Button = styled.button`
  background-color: #0278ae;
  font-size: 1.324em;
  color: #eeeeee;
  :hover{
    background-color: #026999;
    color: #eeeeee;
`;

export default function Start() {
  return (
    <div className="d-flex justify-content-center ">
      <Button type="button" className="w-50 btn mt-4">
        Comenzar juego
      </Button>
    </div>
  );
}
