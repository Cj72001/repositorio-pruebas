import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonSearch = styled.button`
  color: #eeeeee;
  background-color: #0278ae;
  font-size: 1.18em;
  :hover {
    color: #eeeeee;
  }
`;

const Small = styled.small`
  color: #fd4040;
`;

export default function SearchTutors({ tutors, setTutors }) {

  const [newTutor, setNewTutor] = useState('')
  const [message, setMessage] = useState('')

  const handlerUpdateTutor = (e) => {

    const value = e.target.value
    setNewTutor(value)

  }

  const existingTutor = () => {
    for( let tutor of tutors ){
      if( tutor.name === newTutor && tutor.Belong){
        return true
      }
    }

    return false
  }

  const handlerAddTutor = (e) => {
    e.preventDefault()

    if(newTutor===''){
      setMessage('Ingresa un nombre')
      return
    }

    const existTutor = existingTutor()

    if(existTutor){
      setMessage('Posiblemente el tutor ya fue asignado')
      return 
    }

    const newTutors = tutors.map( tutor => (
      tutor.name === newTutor ? {...tutor, Belong:true} : tutor
    ) )

    setTutors(newTutors)
    setMessage('')
  }
  
  return (
    <form className="form-inline w-100">
      <div className="form-group w-75">
        <input
          type="text"
          value={newTutor}
          className="shadow form-control form-search w-100"
          placeholder="Buscar por nombres"
          onChange={handlerUpdateTutor}
        />
        { message !== '' ? <Small className="form-text">{message}</Small> : <></>}
      </div>
      <div className="form-btn-search w-25 d-flex justify-content-end">
        <ButtonSearch
          type="submit"
          onClick={handlerAddTutor}
          className="btn ml-5">
          <FontAwesomeIcon icon={faPlus} className="font-weight" />
        </ButtonSearch>
      </div>
    </form>
  );
}
