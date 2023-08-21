import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPostTodos } from '../../redux/slices/todosSlice'

const ToDoForm = () => {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (title) {
      dispatch(fetchPostTodos(title))
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder='Добавить задачу...'
      />
      <button type='submit'>Добавить</button>
    </form>
  )
}

export default ToDoForm
