import { useState, useEffect} from 'react'
import Project from '../components/Project'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectSelect from '../components/ProjectSelect'


const Home = () => {

  const [selectProject, setSelectProject] = useState(null)
  const [project, setProject] = useState([])
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [galaxy, setGalaxy] = useState(false)
  const [clicked, setClicked] = useState(false)


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

    const handleGalaxyClick = () => {
      setGalaxy(!galaxy)
      setClicked(!clicked)
    }

  return (
      <div>
        <button onClick={handleGalaxyClick}>{clicked ? "Show Text" : "Show Galaxy"}</button>
        <ProjectSelect 
          projects={projects} 
          setSelectProject={setSelectProject} />
        { galaxy ? 
        <GalaxyBuild 
          project={project} 
          tasks={tasks}/> 
        : 
        <Project 
          project={project} 
          tasks={tasks} /> }
      </div>  
  )
}

export default Home