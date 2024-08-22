import { createSlice } from "@reduxjs/toolkit";


//to initialize the file as slice we use a method createSlice()
export const counterSlice =createSlice({
   //name has no importance
   name:'counterApp',
   //inital state creation
   initialState:{
    value:0
   },
   reducers:{
    //logic to update the value 
    //actions are crated inside the reducers 
    increment:(state,data) =>{
        if(!data.payload){
            state.value=state.value+1
        }
        else{
            state.value=state.value+data.payload
        }
        
    },
    decrement:(state,data)=>{
        if(!data.payload){
            state.value=state.value-1
        }
        else{
            state.value=state.value-data.payload
        }
    },
    reset:(state)=>{
        state.value=0;
    }
   }
})
export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;