import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

const H1 = styled.h1`
    width: 30%;
`;
const P = styled.p`
    font-size: 7em;
    width: 40%;
`;

const ButtonWrapper = styled.div`
    width: 30%;
`;

const Button = styled.button`
  background-color: #0278ae;
  color: #eeeeee;
`;

export default function Header({ room='UCA', tableName='Grupo 1' }){

    return(
        <header className='d-flex justify-content-between'>
           <H1 className='pl-4 mt-3'>{ room } | {tableName}</H1>
           <P className='text-center pt-4'>10:00</P>
           <ButtonWrapper className="d-flex justify-content-end align-items-start mr-3 mt-3">
               <Button className="btn mx-2 my-1" type='button'>Votar</Button>
               <Button className="btn mx-2 my-1" type='button'>Gravedad</Button>
           </ButtonWrapper>
        </header>
    )
}
