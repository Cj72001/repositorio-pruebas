import React, {Fragment} from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faTrash  } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const H5 = styled.h5`
  color: #191919;
  font-size: 1.10em;

`;


export default function Tutor({ name, tutors, setTutors }){

  const handlerRemoveTutor = () => {

    const newTutors = tutors.map( tutor  => (
      tutor.name === name ? {...tutor, Belong:false} : tutor
    ))

    setTutors(newTutors)

  }

  return(
    <Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <H5 className='text-muted '>{name}</H5>
        <FontAwesomeIcon icon={faTrash} className='text-danger mr-3' onClick={handlerRemoveTutor} />
       </div>
       <hr />
    </Fragment>
  )
}
