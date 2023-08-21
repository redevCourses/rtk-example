import AddTaskForm1 from './components/Form1'
import AddTaskForm2 from './components/Form2'
import TaskList1 from './pages/TaskList1'
import TaskList2 from './pages/TaskList2'
import ToDoExample from './pages/ToDoExample'

const App = () => (
  <>
    <div>
      <h1>Список задач (slice)</h1>
      <AddTaskForm1 />
      <TaskList1 />
    </div>
    <div>
      <h1>Список задач (reducers)</h1>
      <AddTaskForm2 />
      <TaskList2 />
    </div>
    <div>
      <h1>Пример createAsyncThunk (GET, POST)</h1>
      <ToDoExample />
    </div>
  </>
)

export default App
