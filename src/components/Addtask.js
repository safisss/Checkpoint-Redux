import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../Reduce/Actions/Actions'
import {Button} from "react-bootstrap";
const Addtask = () => {
const[Input, setInput] = useState("")
  const handleChange = (e) => {
    setInput(e.target.value)
  }
const dispatch = useDispatch();

  const handleAdd = ()=> {
  dispatch(ADD(Input));

  }
  return (
    <div style={{}}>

<input type="text" placeholder="Add a task" onChange={handleChange}/>

<Button type="submit" onClick={handleAdd} variant="primary">ADD Task</Button>



    </div>

  )
}

export default Addtask



