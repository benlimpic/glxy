import React from 'react'
import {Link} from "react-router-dom";

function ProjectSelect(projects, setSelectProject) {


  const projectOptions = projects.map((data) => {
    return <option key={data.id} value={data.id}>{data.title}</option>})

  return  <div>
            <select onChange={(e) => {setSelectProject(e.target.value)}}>
              <option value={0}>Select Project</option>
              {projectOptions}
            </select>
            <Link to="/new-Project">
              <button>New Project</button>
            </Link>
          </div>

}

export default ProjectSelect
