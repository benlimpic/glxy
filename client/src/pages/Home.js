import { useState, useEffect} from 'react'
import Project from '../components/Project'
import ProjectSelect from '../components/ProjectSelect'


const Home = ( {} ) => {

  const [projects, setProjects] = useState([])
  const [selectProject, setSelectProject] = useState(null)
  const [selectTask, setSelectTask] = useState(null)
  const [selectSubtask, setSelectSubtask] = useState(null)

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  return (
      <div>
        <ProjectSelect 
          projects={projects} 
          setSelectProject={setSelectProject} />
        <Project 
          projects={projects} 
          selectProject={selectProject} 
          selectTask={selectTask}
          setSelectTask={setSelectTask}
          selectSubtask={selectSubtask}
          setSelectSubtask={setSelectSubtask} />
      </div>  
  )
}

export default Home