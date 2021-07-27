import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'hi',
      reminder: false
    }, {
      id: 2,
      name: 'hello',
      reminder: false

    }, {
      id: 3,
      name: 'hey',
      reminder: false

    }
  ])

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
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ toggleReminder}/> : 'No Tasks yet.'}
    </div>
  );
}

export default App;
