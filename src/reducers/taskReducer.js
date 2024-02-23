import { createSlice } from "@reduxjs/toolkit";

// Set initial state
const initialState = {
  tasks: [],
};

// Define a task slice
const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  }
});


export const { addTodo, deleteTodo } = taskSlice.actions;

export default taskSlice.reducer;


