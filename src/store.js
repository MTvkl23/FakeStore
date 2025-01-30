import { configureStore, createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: "",
  reducers: {
    setUsername: (state, action) => action.payload,
  },
});

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => 0,
  },
});

export const { setUsername } = usernameSlice.actions;
export const { increment, decrement, reset } = counterSlice.actions;

const store = configureStore({
  reducer: {
    username: usernameSlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;