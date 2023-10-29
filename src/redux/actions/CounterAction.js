import * as actionTypes from "./ActionTypes";

export const increase_counter=()=>({
    type:actionTypes.Increase_Counter,
    payload:1
})

export const decrease_counter=()=>({
    type:actionTypes.Decrease_Counter,
    payload:1
})

export const reset_counter=()=>({
    type:actionTypes.Reset_Counter,
    payload:0
})
