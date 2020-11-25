import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'  

const ButtonAdd = styled.button`
  color: #eeeeee;
  background-color: #0278ae;
  font-size: 1.14em;

  :hover {
     color: #eeeeee;
  }
`;

export default function AddTutors({ setShowTutors }){

  return(
    <div className='d-flex justify-content-center'>
      <ButtonAdd
        id="btn-save-modal"
        type="button"
        className="btn"
        data-dismiss="modal"
        onClick={ () => setShowTutors(false) }
      >
        Confirmar cambios
      </ButtonAdd>
    </div>
  )
}
