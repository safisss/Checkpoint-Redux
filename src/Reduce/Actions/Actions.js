import {ADD_TASK, EDIT_TASK, DONE_TASK} from "../Constants/ActionsTypes";




export const ADD = (payload) => {
    return {
        type: ADD_TASK,
        payload,
    }
}

export const EDIT = (payload) => {
    return {
        type: EDIT_TASK,
        payload,
    }
}


export const DONE = (payload) => {
    return {
        type: DONE_TASK,
        payload,
    }
}






// import {ADD, FILTER, EDIT} from "redux"

  

//   export const Add = () => {
//       return {
// type : ADD
//       }
//   }


//   export const Filter = () => {
//       return {
//           type : FILTER
//       }
//   }


//   export const Edit = () => {
//       return {
//           type : EDIT
//       }
//   }