import logo from './logo.svg';
import './App.css';
import ListTask from './components/ListTask';
import Addtask from './components/Addtask';
import {useSelector} from "react-redux"

function App() {

const ToDo = useSelector(state=>state.ReducerTaskToDo.Tasks)

  return (

    <div className="App" style={{margin:"10%" , backgroundColor:"#a0ced9"}}>


   <h1 style={{fontSize:"100", color: "white",textDecoration:"underline", backgroundColor:"#39BFCB", padding:"3%" }}> My Todo App </h1>
   <hr/>

  <Addtask/> 
  <ListTask ToDo={ToDo}/>

    </div>
  );
} 

export default App;
