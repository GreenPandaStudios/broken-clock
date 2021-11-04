import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTime } from './timerAPI';

const initialState = {
  timeOffset: 0 
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getTimeAsync = createAsyncThunk(
  'timer/fetchTime',
  async () => {
    const response = await fetchTime();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setOffset: (state, action) => {

      state.timeOffset = action.payload;
    },
  }
});

export const { setOffset} = timerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectOffset = (state) => state.timer.timeOffset;
export default timerSlice.reducer;
