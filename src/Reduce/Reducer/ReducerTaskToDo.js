import {ADD_TASK, EDIT_TASK, DONE_TASK} from "../Constants/ActionsTypes"


const initialState ={
Tasks: [
    
    {
        id: 1,
        description: "task 1",
        isDone: false
    },

    {
        id: 2,
        description: "task 2",
        isDone: false
    },
    {
        id: 3,
        description: "task 3",
        isDone: false
    }

]
};


export const ReducerTaskToDo = (state=initialState, actions) => {
    const {type, payload} = actions;

    switch (type) {

        case ADD_TASK:
            return {
             Tasks:[...state.Tasks,{id:Math.random(), description:payload, isDone:false}]
            }

            case EDIT_TASK:
                return {
                 Tasks : state.Tasks.map(task => task.id == payload.id ? {...task, description:payload.newDescription}: task )
                }    
            
            case DONE_TASK:
                return {
                Tasks : state.Tasks.map(task=> task.id == payload.id ? {...task, isDone:!payload.done}: task )
                } 
    
        default:
            return state;
    }
}



















// import {ADD, EDIT, FILTER} from "../Constants/ActionsTypes"

//  const initialState = 

// ToDo [ 
    
// {
//     ID : Math.random(),
//     Description : "Task 1 : HTML 5 ",
//     isDone :false,
//     // isDone : true,
//     },


//     {
//     ID : Math.random(),
//     Description : "Task 2 : CSS",
//     isDone : false,

//     },

//     {

//     ID : Math.random(),
//     Description : "Task 3 : JavaScript ",
//     isDone : false,
//     }

 
// ]

// export const TaskToDo = (state= initialState, action => {
//         const {type} = action;
    
// switch (type) {..., state
//     case ADD:
//         return {
//             ToDo: state.ToDo
//         }
// case EDIT:
//     return {
//         ToDo:state.ToDo
//     }
// case FILTER:
//     return {
//         ToDo: state.FILTER
//     }
//     default:
//         return state;
//     }
// }
// }
