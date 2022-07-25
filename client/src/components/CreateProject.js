import {useEffect, useState} from 'react'

function CreateProject(user, setSelectProject) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [lifeCycle, setLifeCycle] = useState('');
  const [priority, setPriority] = useState('');

  const NewProject = {
    title,
    description,
    body,
    lifeCycle,
    priority,
    user_id: user.id
  }

  const handleSubmitProject = (e) => {
    e.preventDefault();
    fetch("/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title,
            description,
            body,
            lifeCycle,
            priority,
            user_id: user.id
        })
    })
    setSelectProject(NewProject)
  }

  return  <div>
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
                    <option value=""></option>

                </select>
            </div>

            <div>
                <label>Priority:</label>
                <select value={priority}
                onChange={(e) => setPriority(e.target.value)}>
                    <option value=""></option>

                </select>
            </div>

            <div>
              <input type="submit" value="Submit" />
            </div>
            </form>
          </div>
}

export default CreateProject