import type TodoItem from '@/models/todoItem';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const storedTodos = localStorage.getItem('tasks');
let initialState: TodoItem[] = [];

if (storedTodos) {
  initialState = JSON.parse(storedTodos) as TodoItem[];
}
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TodoItem>) => {
      state.push(action.payload);
    },

    removeTask: (state, action: PayloadAction<string>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<string>) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
  },
});

export default tasksSlice.reducer;

export const { addTask, removeTask, updateTask } = tasksSlice.actions;
