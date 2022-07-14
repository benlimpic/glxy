import React from 'react'

function ProjectSelect(props) {

  const projectOptions = props.projects.map((project) => {
    return <option key={project.id} value={project.id}>{project.title}</option>})

  return  <select onChange={(e) => {props.setSelectProject(e.target.value)}}>
            <option value={0}>Select Project</option>
            {projectOptions}
          </select>
}

export default ProjectSelect


// create TaskSelect and import it to Project
//create SubtaskSelect and import it to Project