import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function UpdateTask(props) {
  
  const [task, setTask] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [body, setBody] = useState([])
  const [lifeCycle, setLifeCycle] = useState([])
  const [priority, setPriority] = useState([])

  const getEditTask = () => {
    fetch(`/tasks/${props.editTask}`)
    .then(r => r.json())
    .then(data => {
      setTask(data)
      setTitle(data.title)
      setDescription(data.description)
      setBody(data.body)
      setLifeCycle(data.life_cycle)
      setPriority(data.priority)
    })
  }
  
  useEffect(() => {
    getEditTask()
  }, [])


  const handleSubmitTask = (e) => {
    e.preventDefault();
    fetch(`tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        title: title,
        description: description,
        body: body,
        life_cycle: lifeCycle,
        priority: priority,
        project_id: task.project_id,
        user_id: task.user_id
      })
    })
  }

  const handleDeleteTask = (e) => {
    e.preventDefault();
    fetch(`tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
  }

  return (
    <div>
      <h3>update task</h3>
      <form onSubmit={handleSubmitTask}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} required
          onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div>
          <label>Description:</label>
          <textarea rows="5" type="text" value={description} required
          onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div>
          <label>Notes:</label>
          <textarea rows="10" type="text" value={body} required
          onChange={(e) => setBody(e.target.value)}/>
        </div>
        <div>
          <label>Status:</label>
          <select value={lifeCycle} 
          onChange={(e) => setLifeCycle(e.target.value)}>
              <option value="">Choose A Status</option>
              <option value="Assigned">Assigned</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready For Review">Ready For Review</option>
              <option value="Edit Requested">Edit Requested</option>
              <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Priority:</label>
          <select value={priority}
          onChange={(e) => setPriority(e.target.value)}>
              <option value="">Choose A Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="None">None</option>
          </select>
        </div>

          <button type="submit">Update</button>

          <button onClick={handleDeleteTask}>Delete</button>

        <Link to="/">
          <button> cancel </button>
        </Link>
      </form>
    </div>
  )
}

export default UpdateTask