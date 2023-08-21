import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// Создаем слайс
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false })
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    }
  }
})

export const { addTask, toggleTask, removeTask } = taskSlice.actions // автоматически генерируются экшены
export default taskSlice.reducer
