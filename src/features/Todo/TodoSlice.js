import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello" }]
  // todos: []
};

//Second Step
export const todoSlice = createSlice({
  name: "todo",
  initialState,//right it properly or will trhpw error
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },
  },
});


//Third step
export const  {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer


