import React, { Fragment } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  width: 80%;
  font-weight: 600;
  font-size: 2.1em;
`;

const Wrapper = styled.div`
  width: 20%;
`;

const P = styled.p`
  width: 80%;
  background-color: #51adcf;
  color: #eeeeee;
  font-weight: 500;
  font-size: 1.93em;
`;

const HR = styled.hr`
  border: 0.5px solid black;
  width: 98%;
`;

export default function Title({ title }) {
  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-end mx-1">
        <H1 className="text-nowrap pb-1">{title}</H1>
        <Wrapper className="d-flex justify-content-center align-items-end pr-2">
          <P className="rounded text-center my-1">00</P>
        </Wrapper>
      </div>
      <HR className="m-0 mb-3" />
    </Fragment>
  );
}
