import { createSlice } from "@reduxjs/toolkit";
import { v1 as uuid } from "uuid";

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id: uuid(), text: "First task", checked: false}
    ]
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({id: uuid(), text: action.payload, checked: false});
    },
    checkTodo: (state, action) => {
      const ind = action.payload;
      state.todos.map((todo, index) => {
        index === ind ? todo.checked = !todo.checked : todo
      })
    },
    removeTodo: (state, action) => {
      const ind = action.payload;
      state.todos = state.todos.filter((todo, index) => {
        if (ind !== index) {
          return todo
        }
      })
    }
  }
})

export const selectTodos = state => state.todos;
export const {addTodo, checkTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;