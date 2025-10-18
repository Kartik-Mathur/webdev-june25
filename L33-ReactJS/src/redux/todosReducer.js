import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

export const counterSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodos: (state, action) => {
            console.log("Action", action);
            state.todos = action.payload.data
        },
    },
})

export const { setTodos } = counterSlice.actions

export default counterSlice.reducer