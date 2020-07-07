export const todoReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':{
            const {id,description}=action
            return [{id,description},...state]
        }
            
        case 'REMOVE_TODO':
            return state.filter(todo=>todo.id !==action.id)
        case 'EDIT_TODO':{
            const newState =[...state]
            const editIndex = state.findIndex(todo=>todo.id === action.id)
            newState[editIndex].description=action.description
          
            return newState
        }
        case 'LOAD_TODO':{
            return [...action.todos]
        }
        default:
            return state
    }
}