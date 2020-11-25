import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLogin = styled.button`
  background-color: ${(props) => props.color};
  font-size: 1.67em;
  width: 50%;
  height: 10%;
  border: 2px solid #eeeeee;
  border-radius: 50px;
  color: #eeeeee;

  :hover {
    background-color: ${(props) =>
      props.color === "transparent" ? "#eeeeee" : "#0278ae"};
    border: 2px solid
      ${(props) => (props.color === "transparent" ? "#0278ae" : "#eeeeee")};
    color: ${(props) =>
      props.color === "transparent" ? "#191919" : "#eeeeee"};
  }
`;

export default function LoginButton({ title, color, handleOnSubmit}) {
  return (
    <div className="d-flex justify-content-center">
      <ButtonLogin
        type="submit"
        color={color}
        className="mx-auto text-uppercase btn my-3"
        onClick={handleOnSubmit}
      >
        {title}
      </ButtonLogin>
    </div>
  );
}
