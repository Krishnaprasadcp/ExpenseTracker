import {createSlice} from '@reduxjs/toolkit';
const userLoginSlice = createSlice({
    name:'userExpenseSlice',
    initialState:{isLoggedin:false,userData:null,token:null},
    reducers:{
        isLoggedin(state){
            state.isLoggedin = !state.isLoggedin;
        },
        userData(state,action){
            state.userData = action.payload
        },
        tokenData(state,action){
            state.token = action.payload
        }
    }
});
export const userLoginAction=userLoginSlice.actions;
export default userLoginSlice; 