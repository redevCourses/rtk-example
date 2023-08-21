import { createAction, createReducer } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
// Создаем экшены
export const addTask = createAction('tasks2/addTask')
export const toggleTask = createAction('tasks2/toggleTask')
export const removeTask = createAction('tasks2/removeTask')

const initialState = []

// Создаем редюсер
const taskReducer = createReducer(initialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      state.push({ id: uuidv4(), text: action.payload, completed: false })
    })
    .addCase(toggleTask, (state, action) => {
      const task = state.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    })
    .addCase(removeTask, (state, action) => {
      return state.filter(task => task.id !== action.payload)
    })
})

export default taskReducer
