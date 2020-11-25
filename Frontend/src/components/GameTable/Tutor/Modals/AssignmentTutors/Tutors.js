import React, {Fragment} from 'react'
import Tutor from './Tutor'
import styled from 'styled-components'

const DivWrapper = styled.div`
  height: 200px;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      
  }
  ::-webkit-scrollbar-thumb {
      border: 1px solid #000000;
          border-radius: 4px;
              background: #0278ae;
                
  }

  ::-webkit-scrollbar-track {
        border-radius: 4px;
            border: 1px solid #000000;
                background: white;
                  
    }

`

export default function Tutors({ tutors, setTutors }){

  const currentTutors = tutors.filter( ({Belong}) => Belong )

  return (
    <Fragment>
      <p className="py-2 m-0 text-muted mr-auto">Tutores asignados:</p>
      <DivWrapper className="main-content-result" >
        { currentTutors.map(({ name, id, Belong }) => <Tutor key={id} name={name} tutors={tutors} setTutors={setTutors}  />)}
      </DivWrapper>
    </Fragment>
  )
}
