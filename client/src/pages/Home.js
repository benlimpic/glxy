import { useState, useEffect} from 'react'
import './Home.css'
import Project from '../components/Project'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectSelect from '../components/ProjectSelect'


const Home = ({user, selectProject, setSelectProject, setProject, project, setProjects, projects, setTasks, tasks, setSubtasks, subtasks, setEditProject}) => {

  const [galaxy, setGalaxy] = useState(false)
  const [clicked, setClicked] = useState(false)


//-------------------------------------------------------

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [selectProject, setProjects])

  useEffect(() => {
      fetch(`/projects/${parseInt(selectProject)}`)
      .then(res => res.json())
      .then(data => setProject(data))
    }, [selectProject, setProject])

  useEffect(() => {
      fetch('/tasks')
      .then(res => res.json())
      .then(data => setTasks(data.filter(task => task.project_id === parseInt(selectProject))))
    }, [selectProject, setTasks])

  useEffect(() => {
      fetch('/subtasks')
      .then(res => res.json())
      .then(data => setSubtasks(data.filter(subtask => subtask.project_id === parseInt(selectProject))))
    }, [selectProject, setSubtasks])

//-------------------------------------------------------

  const handleGalaxyClick = () => {
    setGalaxy(!galaxy)
    setClicked(!clicked)
  }

//-------------------------------------------------------

  return (
      <div>
        <button onClick={handleGalaxyClick}>{clicked ? "Show Text" : "Show Galaxy"}</button>
        
        <ProjectSelect 
          projects={projects} 
          setSelectProject={setSelectProject} />

        { galaxy ? 
        <GalaxyBuild className="galaxy"
          project={project} 
          tasks={tasks}
          subtasks={subtasks}/> 
        : 
        <Project
          setSelectProject={setSelectProject}
          selectProject={selectProject}
          setEditProject={setEditProject}
          project={project} 
          tasks={tasks} /> }
      </div>  
  )
}

export default Home