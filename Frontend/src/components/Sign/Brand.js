import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Title from "./Title";
import Logo from "./Logo";
import Information from "./Information";
import LogginButton from "./LoginButton";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 45%;
  height: 100vh;
  background-color: #0278ae;
  color: #eeeeee;
`;

export default function Brand({
  title,
  information,
  routeTitle,
  route = "/signin",
}) {
  return (
    <Wrapper className="pt-5">
      {/*<Logo />*/}
      <Title title={title} welcome={true} />
      <Information information={information} create={false} />
      <Link to={route}>
        <LogginButton title={routeTitle} color="transparent" route={route} />
      </Link>
    </Wrapper>
  );
}
