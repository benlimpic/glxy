import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function UpdateProject(props) {
  
  const [title, setTitle] = useState([props.editProject.title])
  const [description, setDescription] = useState([props.editProject.description])
  const [body, setBody] = useState([props.editProject.body])
  const [lifeCycle, setLifeCycle] = useState([props.editProject.life_cycle])
  const [priority, setPriority] = useState([props.editProject.priority])

  const handleSubmitProject = (e) => {
    e.preventDefault();
    fetch(`/projects/${props.editProject.id}`, {
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
        user_id: props.editProject.user_id
      })
    })
  }

  return (
    <div>
      <h3>update project</h3>
      <form onSubmit={handleSubmitProject}>
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

export default UpdateProject