import {configureStore} from '@reduxjs/toolkit';
import userLoginSlice from './userSlice';

const store = configureStore({
    reducer:{userLoginData:userLoginSlice.reducer}
});
export default store;