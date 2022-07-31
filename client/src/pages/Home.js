import { useState, useEffect } from 'react'
import './Home.css'
import ProjectFull from '../components/ProjectFull'
import GalaxyBuild from '../components/GalaxyBuild'
import ProjectOptions from '../components/ProjectOptions'
import { Button, Box, Box4 } from "../styles/index.js";



const Home = ({ user, setEditSubtask, setSubtaskTask, setEditTask, setTaskProject, selectProject, setSelectProject, setEditProject, editProject}) => {

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
        {clicked ? 
        <div>
        <Box4>
          <ProjectOptions
            handleGalaxyClick={handleGalaxyClick}
            clicked={clicked}
            projects={projects}
            selectProject={selectProject}
            setSelectProject={setSelectProject} />
            <Button onClick={handleGalaxyClick}>{clicked ? "Show Text" : "Show Galaxy"}</Button>
        </Box4>

          <GalaxyBuild className="galaxy"
            selectProject={selectProject}
            project={project} 
            tasks={tasks} /> 
        </div>
        :
        <div> 
        <Box4>
          <ProjectOptions
            handleGalaxyClick={handleGalaxyClick}
            clicked={clicked}
            projects={projects}
            selectProject={selectProject}
            setSelectProject={setSelectProject} />
            <Button onClick={handleGalaxyClick}>{clicked ? "Show Text" : "Show Galaxy"}</Button>
        </Box4>

          <ProjectFull
            setSelectProject={setSelectProject}
            selectProject={selectProject}
            setEditProject={setEditProject}
            editProject={editProject}
            project={project}
            setProject={setProject} 
            tasks={tasks} 
            setTaskProject={setTaskProject}
            setEditTask={setEditTask}
            setSubtaskTask={setSubtaskTask}
            setEditSubtask={setEditSubtask} /> 

        </div>}
      </div>  
  )
}

export default Home