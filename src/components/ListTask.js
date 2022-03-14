import React from 'react';
import EditTask from './EditTask';
import { useDispatch } from 'react-redux';
import { DONE } from '../Reduce/Actions/Actions';
import {Button} from "react-bootstrap";
const ListTask = ({ToDo, task}) => {

 const dispatch = useDispatch();

    const handleDone = (id, isDone) => {
  dispatch(DONE({id, isDone}))
    }
  
  
    return (
    <div>

{ToDo.map((task)=> {



    return (
        
        <div key={task.id}>

        <h1>{task.description}</h1> 

          <EditTask task={task} />  

        <Button variant="info" onClick={()=>handleDone(task.id, task.isDone)}>{task.isDone ? "is Not Done" : "Done" }</Button>

        </div>
                );
            })}
        </div>
    );
};



export default ListTask;       






    
  



