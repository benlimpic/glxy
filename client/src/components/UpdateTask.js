import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Form.css'
import { Box, Box2, Button, Input, FormField, Label, Textarea, Select } from "../styles/Index.js";

function UpdateTask(props) {
  
  const [task, setTask] = useState([])
  const [title, setTitle] = useState([])
  const [description, setDescription] = useState([])
  const [body, setBody] = useState([])
  const [lifeCycle, setLifeCycle] = useState([])
  const [priority, setPriority] = useState([])
  // const [errors, setErrors] = useState([]);

  const navigate = useNavigate()

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
    // eslint-disable-next-line
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
    navigate('/')
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
    navigate('/')
  }

  return (
    <Box>
    <Box2 className="Form">
      <h1>Update Task</h1>
      <form onSubmit={handleSubmitTask}>
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

          <Button onClick={handleDeleteTask}>Delete</Button>

        <Link to="/">
          <Button> cancel </Button>
        </Link>
        {/* <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
        ))}
        </FormField> */}
      </form>
    </Box2>
    </Box>
  )
}

export default UpdateTask