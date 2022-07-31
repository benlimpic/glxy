import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Form.css'
import { Box, Box3, Button, Error, Input, FormField, Label, Textarea, Select } from "../styles/index.js";

function UpdateSubtask(props) {
  
  const [subtask, setSubtask] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [body, setBody] = useState([])
  const [lifeCycle, setLifeCycle] = useState([])
  const [priority, setPriority] = useState([])
  const [errors, setErrors] = useState([]);

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
    <Box>
    <Box3 className="Form">
      <h1>Update Subtask</h1>
      <form onSubmit={handleSubmitSubtask}>
        <FormField>
          <Label>Title:</Label>
          <Input type="text" value={title} required
          onChange={(e) => setTitle(e.target.value)}/>
        </FormField>
        <FormField>
          <Label>Description:</Label>
          <Textarea rows="5" type="text" value={description} required
          onChange={(e) => setDescription(e.target.value)}/>
        </FormField>
        <FormField>
          <Label>Notes:</Label>
          <Textarea rows="10" type="text" value={body} required
          onChange={(e) => setBody(e.target.value)}/>
        </FormField>
        <FormField>
          <Label>Status:</Label>
          <Select value={lifeCycle} 
          onChange={(e) => setLifeCycle(e.target.value)}>
              <option value="">Choose A Status</option>
              <option value="Assigned">Assigned</option>
              <option value="In Progress">In Progress</option>
              <option value="Ready For Review">Ready For Review</option>
              <option value="Edit Requested">Edit Requested</option>
              <option value="Completed">Completed</option>
          </Select>
        </FormField>
        <FormField>
          <Label>Priority:</Label>
          <Select value={priority}
          onChange={(e) => setPriority(e.target.value)}>
              <option value="">Choose A Priority</option>
              <option value="Urgent">Urgent</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
              <option value="None">None</option>
          </Select>
        </FormField>
        <Button type="submit">Update</Button>
      
        <Button onClick={handleDeleteSubtask}>Delete</Button>

        <Link to="/">
          <Button> cancel </Button>
        </Link>
        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
        ))}
        </FormField>
      </form>
    </Box3>
    </Box>
  )
}

export default UpdateSubtask