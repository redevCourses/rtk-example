import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }
}

const getTodos = async () => {
  const response = await axios.get(process.env.REACT_APP_URL, config)
  return response
}

// Создаем асинхронное действие с помощью createAsyncThunk
const fetchGetTodos = createAsyncThunk('todos/fetchGetTodos', async () => {
  const { data } = await getTodos()
  return data
})

const postTodos = async title => {
  const response = await axios.post(
    process.env.REACT_APP_URL,
    { title },
    config
  )
  return response
}

const fetchPostTodos = createAsyncThunk('todos/fetchPostTodos', async title => {
  const { data } = await postTodos(title)
  return data
})

const todosSlice = createSlice({
  name: 'todos',
  initialState: {},
  reducers: {},
  extraReducers: {
    [fetchGetTodos.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGetTodos.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data = action.payload
    },
    [fetchGetTodos.rejected]: (state, action) => {
      state.status = 'failed'
      console.log(action.payload)
      state.error = action.payload
    },
    [fetchPostTodos.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.data.push(action.payload)
    }
  }
})
export { fetchGetTodos, fetchPostTodos }
export default todosSlice.reducer
