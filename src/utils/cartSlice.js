import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        obj:{}
    },
    reducers:{
        addItem:(state,action)=>{
                
                if(state.obj[action.payload.id]){
                    (state.obj[action.payload.id]).quantity++;
                    
                }else{
                    state.obj[action.payload.id] = action.payload
                }
        },
        removeItem:(state,action)=>{
            
            console.log(state.obj[action.payload]);
            delete (state.obj[action.payload]);
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
        
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;