import React from 'react';
import {Button, Modal} from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EDIT } from '../Reduce/Actions/Actions';
const EditTask = ({task}) => {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newDescription, setnewDescription]= useState("")
  const handleChange = (e) => {
    setnewDescription(e.target.value)
  }

  let id = task.id
  
  const dispatch = useDispatch();
  
  const handleClick = () => {
  console.log(task.id)
  
  dispatch(EDIT({newDescription, id}));
  handleClose()
  }
  return (
    <>
    <Button variant="success" onClick={handleShow}>
      Edit Task
    </Button>

    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>EDIT</Modal.Title>
      </Modal.Header>
      <Modal.Body> 
<input type="text" placeholder='description' defaultValue={task.description} onChange={handleChange}></input>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  


  )
}

export default EditTask;