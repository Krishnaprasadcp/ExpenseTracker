import {configureStore} from '@reduxjs/toolkit';
import userLoginSlice from './userSlice';
import signUpSlice from './userSignUpSlice';
const store = configureStore({
    reducer:{
        userLoginData:userLoginSlice.reducer,
        userExpennseSignup:signUpSlice.reducer
    }
});
export default store;