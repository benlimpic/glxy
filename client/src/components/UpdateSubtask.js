import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import { FormField, Label, Select, Button } from "./styles";

function UpdateSubtask(props) {
  
  const [subtask, setSubtask] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [body, setBody] = useState([])
  const [lifeCycle, setLifeCycle] = useState([])
  const [priority, setPriority] = useState([])

  const navigate = useNavigate()

  const getEditSubtask = () => {
    fetch(`/subtasks/${props.editSubtask}`)
    .then(r => r.json())
    .then(data => {
      setSubtask(data)
      setTitle(data.title)
      setDescription(data.description)
      setBody(data.body)
      setLifeCycle(data.life_cycle)
      setPriority(data.priority)
    })
  }
  
  useEffect(() => {
    getEditSubtask()
  }, [])

  const handleSubmitSubtask = (e) => {
    e.preventDefault();
    fetch(`subtasks/${subtask.id}`, {
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
        task_id: subtask.task_id,
        project_id: subtask.project_id,
        user_id: subtask.user_id
      })
    })
    navigate('/')
  }

  const handleDeleteSubtask = (e) => {
    e.preventDefault();
    fetch(`subtasks/${subtask.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    navigate('/')
  }

  return (
    <div>
      <h3>update subtask</h3>
      <form onSubmit={handleSubmitSubtask}>
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
      
        <button onClick={handleDeleteSubtask}>Delete</button>

        <Link to="/">
          <button> cancel </button>
        </Link>
      </form>
    </div>
  )
}

export default UpdateSubtask