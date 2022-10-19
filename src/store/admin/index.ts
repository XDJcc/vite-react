import {createSlice,} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counterReducer',
    initialState: {
        num: 1,
    },
    reducers: {
        increment(state) {
            console.log('store更新了');
            state.num += 1;
        }
    },

});

export const increment = counterSlice.actions.increment


export default counterSlice.reducer;
