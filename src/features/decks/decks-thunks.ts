import {Dispatch} from "redux";
import {fetchData} from "./decks-api.ts";
import {setStateAC} from "./decks-reducer.ts";


export const fetchThunkTC = ()=>(dispatch:Dispatch)=>{
    fetchData().then(data=>{
        dispatch(setStateAC(data.items))})
}

