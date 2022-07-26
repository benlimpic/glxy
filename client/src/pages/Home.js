import { useState, useEffect } from 'react'
import './Home.css'
import Project from '../components/Project'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectOptions from '../components/ProjectOptions'



const Home = ({ user, setTaskProject, selectProject, setSelectProject, setEditProject, editProject}) => {

  const [galaxy, setGalaxy] = useState(false)
  const [clicked, setClicked] = useState(false)

  const [projects, setProjects] = useState([])
  const [project, setProject] = useState([])
  const [tasks, setTasks] = useState([])

  

//-------------------------------------------------------

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data.filter(project => project.user_id === user.id)))
  }, [user.id])

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

//-------------------------------------------------------

  const handleGalaxyClick = () => {
    setGalaxy(!galaxy)
    setClicked(!clicked)
  }

//-------------------------------------------------------

  return (
      <div>
        <button onClick={handleGalaxyClick}>{clicked ? "Show Text" : "Show Galaxy"}</button>
        
        <ProjectOptions
          projects={projects}
          selectProject={selectProject}
          setSelectProject={setSelectProject}
        />
        { galaxy ? 
        <GalaxyBuild className="galaxy"
          project={project} 
          tasks={tasks} /> 
        : 
        <Project
          setSelectProject={setSelectProject}
          selectProject={selectProject}
          setEditProject={setEditProject}
          editProject={editProject}
          project={project}
          setProject={setProject} 
          tasks={tasks} 
          setTaskProject={setTaskProject}/> }
      </div>  
  )
}

export default Home