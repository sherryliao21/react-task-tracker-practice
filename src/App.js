import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTasks from './components/AddTask'
import { useState } from 'react'

function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'hi',
      day: '2021-08-28',
      reminder: false
    },
    {
      id: 2,
      text: 'hello',
      day: '2021-08-28',
      reminder: false
    },
    {
      id: 3,
      text: 'hey',
      day: '2021-08-28',
      reminder: false
    }
  ])

  // Add Tasks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  
  return (
    <div className="container">
      <Header />
      {showAdd ? <AddTasks onAdd={addTask} /> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks yet.'}
    </div>
  );
}

export default App;
