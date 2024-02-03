import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo: {
      prepare(text) {
        return { payload: { text, id: nanoid() } };
      },
      reducer(state, action) {
        state.todos = [...state.todos, action.payload];
      },
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo } = todoSlice.actions;
