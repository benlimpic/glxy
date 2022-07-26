import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function UpdateTask(props) {
  
  const [title, setTitle] = useState([props.editTask.title])
  const [description, setDescription] = useState([props.editTask.description])
  const [body, setBody] = useState([props.editTask.body])
  const [lifeCycle, setLifeCycle] = useState([props.editTask.life_cycle])
  const [priority, setPriority] = useState([props.editTask.priority])

  const handleSubmitTask = (e) => {
    e.preventDefault();
    fetch(`tasks/${props.editTask.id}`, {
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
        project_id: props.editTask.project_id,
        user_id: props.editTask.user_id
      })
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
      
        <Link to="/">
          <button> cancel </button>
        </Link>
      </form>
    </div>
  )
}

export default UpdateTask