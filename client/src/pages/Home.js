import { useState, useEffect} from 'react'
import Project from '../components/Project'
import ProjectSelect from '../components/ProjectSelect'


const Home = () => {

  const [selectProject, setSelectProject] = useState(null)
  const [project, setProject] = useState([])
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])


  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  useEffect(() => {
    if (selectProject) {
      fetch(`/projects/${parseInt(selectProject)}`)
      .then(res => res.json())
      .then(data => setProject(data))

      fetch(`/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data.filter(task => task.project_id === parseInt(selectProject))))

    }}, [selectProject])

  return (
      <div>
        <ProjectSelect 
          projects={projects} 
          setSelectProject={setSelectProject} />
        <Project
          project={project} 
          tasks={tasks} /> 
      </div>  
  )
}

export default Home