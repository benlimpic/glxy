import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

function CreateProject(props) {

    const navigate = useNavigate()

    const [project, setProject] = useState([])
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [lifeCycle, setLifeCycle] = useState('');
    const [priority, setPriority] = useState('');

    const getProject = () => {
        fetch(`/projects/${props.editProject}`)
        .then(r => r.json())
        .then(data => {
            setProject(data)
        }
        )
    }

    useEffect(() => {
        getProject()
    }
    , [])

    const handleSubmitTask = (e) => {
    e.preventDefault();
    fetch("/tasks", {
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
            project_id: project.id,
            user_id: project.user_id
        })
    })
    navigate('/')
    }

    return    <div>
            <h1>Create New Task</h1>          
                <form onSubmit={handleSubmitTask}>
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
                </form>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
}

export default CreateProject