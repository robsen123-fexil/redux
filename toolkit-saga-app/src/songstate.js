import {createSlice} from '@reduxjs/toolkit'
export const songSlice=createSlice({
    name:'songs',
    initialState:{
        songs:[],
        isloading:false

    },
    reducers:{
        getsongsFetch:(state)=>{
            state.isloading=true;
        },
        getsongssuccess:(state, action)=>{
            state.songs=action.payload;
            state.isloading=false;

        },
        getsongsFailure:(state)=>{
            state.isloading=false;
        }

    },

})
export const{ getsongsFetch, getsongssuccess, getsongsFailure}=songSlice.actions;
export default songSlice.reducers;