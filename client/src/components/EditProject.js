import { useState, useEffect} from 'react'

function EditProject(setSelectProject, editProject) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [lifeCycle, setLifeCycle] = useState('');
  const [priority, setPriority] = useState('');

  useEffect(() => {
    const init = (editProject) => {
        setTitle(editProject.title);
        setDescription(editProject.description);
        setBody(editProject.body);
        setLifeCycle(editProject.life_cycle);
        setPriority(editProject.priority);
    }
    init(editProject);
  }, [editProject])

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    fetch(`/projects/${editProject.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title,
            description,
            body,
            lifeCycle,
            priority
        })
    })
  setSelectProject(editProject)
}



  return  <div>         
            <form key={editProject.id} onSubmit={handleProjectSubmit}>
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
                      <option value="">{}</option>

                  </select>
              </div>

              <div>
                  <label>Priority:</label>
                  <select value={priority}
                  onChange={(e) => setPriority(e.target.value)}>
                      <option value="">{}</option>

                  </select>
              </div>

              <div>
                  <input type="submit" value="Update" />
                  <button>Delete</button>
              </div>
            </form>
    </div>
}

export default EditProject