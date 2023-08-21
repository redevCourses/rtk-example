import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/slices/taskSlice'

const AddTaskForm = () => {
  const [taskText, setTaskText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    if (taskText) {
      dispatch(addTask(taskText))
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder='Добавить задачу...'
      />
      <button type='submit'>Добавить</button>
    </form>
  )
}

export default AddTaskForm
