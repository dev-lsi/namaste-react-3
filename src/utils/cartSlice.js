import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cartSlice',
    initialState:{
        items:[1,2,3,5,7]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        }
        
    }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;