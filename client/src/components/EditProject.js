import { useState, useEffect} from 'react'

function EditProject(setSelectProject, editProject) {

  const [title, setTitle] = useState([]);
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
    console.log("submit")
}

// setSelectProject(editProject)

  return (
    <div>editProject</div>
  )
}

export default EditProject