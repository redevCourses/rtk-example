import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToDoForm from '../../components/ToDoForm'
import { fetchGetTodos } from '../../redux/slices/todosSlice'

const ToDoExample = () => {
  const dispatch = useDispatch()
  const { status, data } = useSelector(state => state.todos)

  useEffect(() => {
    const postData = () => {
      dispatch(fetchGetTodos())
    }
    postData()
  }, [dispatch])

  return (
    <div>
      <ToDoForm />
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && (
        <p>
          Ошибка. Что-то пошло не так (Скорей всего не добавил токен в .env)
        </p>
      )}
      {status === 'succeeded' &&
        data &&
        data.map(({ id, title }, index) => {
          return (
            <div key={id}>
              <h2>
                {index} : {title}
              </h2>
            </div>
          )
        })}
      {status === 'succeeded' && data.length === 0 && <p>Тут пусто 🫙</p>}
    </div>
  )
}

export default ToDoExample
