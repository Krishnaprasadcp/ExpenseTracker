import {configureStore} from '@reduxjs/toolkit';
import userExpenseSlice from './user-expenseSlice';

const store = configureStore({
    reducer:{userExpenseData:userExpenseSlice.reducer}
});
export default store;