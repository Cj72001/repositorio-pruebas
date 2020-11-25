import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: ${ props => props.create ? '1.121': '1.312'}em;
  color: #${ props => !props.create ? 'eeeeee': '0278ae'};
`;

export default function Information({ information, create }) {
  return <P className='text-center px-3' create={create} >{information}</P>;
}
