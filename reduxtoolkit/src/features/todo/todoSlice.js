import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
    }
})

/* `const {addTodo,removeTodo} = todoSlice.actions` is a destructuring assignment that extracts the
`addTodo` and `removeTodo` functions from the `todoSlice.actions` object. This allows you to
directly access and use these action functions in your code without having to reference them through
the `todoSlice.actions` object every time. */
export const {addTodo,removeTodo} = todoSlice.actions

/* `export default todoSlice.reducer` is exporting the reducer function created by `createSlice` from
the `todoSlice` object as the default export of this module. This allows other parts of the
application to import and use this reducer function to manage the state related to todos in a Redux
store. */
export default todoSlice.reducer