import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import AddTutors from './AddTutors'
import SearchTutors from './SearchTutors'
import Tutors from './Tutors'

export default function AssignmentTutors({setShowTutors}){

  let AllTutors = [
    {name: "Henry Alexander Cortez Amaya", id:0, Belong:true},
    {name: "Katya Liseth Castro López", id:1, Belong:false},
    {name: "Juan Alejandro Lopez Crespin", id:2, Belong:true},
    {name: "Margara Liseth Castro López", id:3, Belong:true},
    {name: "Mario Alejandro Lopez Crespin", id:4, Belong:false},
    {name: 'Cristian Rosales chicas', id:5, Belong: true},]

  const [tutors, setTutors] = useState(AllTutors)


  return(
    <Modal show={true} onHide={() => setShowTutors(false)}>
      <Modal.Header>
        <SearchTutors tutors={tutors} setTutors={setTutors} />
      </Modal.Header>
      <Modal.Body>
        <Tutors tutors={tutors} setTutors={setTutors} />
      </Modal.Body>
      <Modal.Footer>
        <AddTutors setShowTutors={setShowTutors}/>
      </Modal.Footer>
    </Modal>
  )
}



