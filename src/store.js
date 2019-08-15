import { createSlice, configureStore } from "redux-starter-kit";

const counterSlice = createSlice({
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
});

const { increment, decrement } = counterSlice.actions;

const store = configureStore({ reducer: counterSlice.reducer });
export default {store: store, actions: counterSlice.actions };