import { useState } from 'react'
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="App">
      <h1>To-Do List</h1>
      <TaskInput />
      <TaskList />
    </div>
    </>
  )
}

export default App
