import {Dispatch} from "redux";
import {addDeck, addDeckParams, fetchData} from "./decks-api.ts";
import {addDeckAC, setStateAC} from "./decks-reducer.ts";


export const fetchThunkTC = ()=>(dispatch:Dispatch)=>{
    fetchData().then(data=>{
        dispatch(setStateAC(data.items))})
}
export const addDeckThunkTC = (params:addDeckParams)=>(dispatch:Dispatch)=>{
    addDeck(params).then(data =>{
        dispatch(addDeckAC(data))
    })
}


