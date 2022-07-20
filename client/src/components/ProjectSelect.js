import React from "react";

function ProjectSelect(props) {

  const projectOptions = props.projects.map((data) => {
    return <option key={data.id} value={data.id}>{data.title}</option>})

  return  <select onChange={(e) => {props.setSelectProject(e.target.value)}}>
            <option value={0}>Select Project</option>
            {projectOptions}
          </select>
}

export default ProjectSelect
