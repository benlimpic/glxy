import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FormField, Label, Select, Button } from "./styles";

function CreateProject(props) {

    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [lifeCycle, setLifeCycle] = useState('');
    const [priority, setPriority] = useState('');

    const handleSubmitProject = (e) => {
    e.preventDefault();
    fetch("/projects", {
        method: "POST",
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
            user_id: props.user.id
        })
    })
    navigate("/")
    }

    return    <div>
            <h1>Create New Project</h1>          
                <form onSubmit={handleSubmitProject}>
                <div>
                    <label>Title:</label>
                    <input type="text" value={title} required 
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                    <label>Description:</label>
                    <textarea rows="5" type="text" value={description} 
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

                <div>
                    <input type="submit" value="Submit" />
                </div>
                <Link to="/">
                    <button>Home</button>
                </Link>
                </form>
            </div>
}

export default CreateProject