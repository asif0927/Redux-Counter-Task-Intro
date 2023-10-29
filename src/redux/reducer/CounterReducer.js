import * as actionTypes from "../actions/ActionTypes";

const counterReducer=(state=0,action)=>{
   let newState;
   switch (action.type) {
    case actionTypes.Increase_Counter:
        return(newState=state+action.payload)
    case actionTypes.Decrease_Counter:
        return(newState=state-action.payload)
    case actionTypes.Reset_Counter:
        return(newState=0)
    default:
       return state;
    }
}

export default counterReducer;