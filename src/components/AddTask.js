import { useState } from "react"

const AddTask = ({ onAdd }) => {
  // setting state default value
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  // submit event
  const onSubmit = (event) => {
    // prevent actually submitting to a page
    event.preventDefault()
    // form validation
    if (!text) {
      alert('Please add a task!')
      return
    }
    // add task with prop
    onAdd({ text, day, reminder })
    // after adding task, clear the inputs
    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form className='add-form' onSubmit={ onSubmit }>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' value={text} onChange={(event) => setText(event.target.value) }/>
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='date' placeholder='Add Day & Time' value={day} onChange={(event) => setDay(event.target.value) } />
      </div>
      <div className='form-control form-control-check'>
        <label>Reminder</label>
        <input type='checkbox' value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)} checked={ reminder }/>
      </div>
      <input type="submit" value='Save Task' className='btn btn-block' />
    </form>
  )
}
export default AddTask