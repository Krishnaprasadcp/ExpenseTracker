import {createSlice} from '@reduxjs/toolkit';
const userExpenseSlice = createSlice({
    name:'userExpenseSlice',
    initialState:{userData:null,expenseData:null,token:null},
    reducers:{
        userData(state,action){
            state.userData = action.payload
        },
        expenseData(state,action){
            state.expenseData = action.payload
        },
        tokenData(state,action){
            state.token = action.payload
        }
    }
});
export const userExpenseActions=userExpenseSlice.actions;
export default userExpenseSlice; 