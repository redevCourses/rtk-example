import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTask, removeTask } from '../../redux/slices/taskSlice'

const TaskList = () => {
  const tasks = useSelector(state => state.tasksWithSlice)
  const dispatch = useDispatch()

  const handleToggle = id => {
    dispatch(toggleTask(id))
  }

  const handleRemove = id => {
    dispatch(removeTask(id))
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <input
            type='checkbox'
            checked={task.completed}
            onChange={() => handleToggle(task.id)}
          />
          {task.text}
          <button onClick={() => handleRemove(task.id)}>Удалить</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
