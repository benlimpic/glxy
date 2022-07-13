import { useState, useEffect} from 'react'
import Project from '../components/Project'


const Home = ( {} ) => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects')
    .then(res => res.json())
    .then(data => setProjects(data))
  }, [])

  return (
      <div>
        <Project projects={projects} />
      </div>  
  )
}

export default Home