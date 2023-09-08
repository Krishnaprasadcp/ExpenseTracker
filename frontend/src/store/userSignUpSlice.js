import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
    name:'signUpSlice',
    initialState:{monthlyExpense:[],userLoginCred:null},
    reducers:{
        addMonthlyExpense(state,action){
            state.monthlyExpense.push(action.payload);
        },
        addUserInfo(state,action){
            state.userLoginCred=action.payload;
        }
    }
});
export const userSignupActions = signUpSlice.actions;
export default signUpSlice;