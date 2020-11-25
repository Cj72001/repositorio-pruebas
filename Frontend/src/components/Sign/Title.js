import React from 'react'
import styled from "styled-components";

const H1 = styled.h1`
  height: 20%;
  font-size: 3.77em;
  color: #${ props => props.welcome ? 'eeeeee': '0278ae'};
`;


export default function Title({ title, welcome}){

    return (
        <H1 className='mt-5 pt-4 px-4 text-center' welcome={welcome}>{title}</H1>
    )
}