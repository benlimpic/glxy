import React, { useState, useEffect } from "react";

function ProjectSelect(props) {

  const projectOptions = props.projects.map((data) => {
    return <option key={data.id} value={data.id}>{data.title}</option>})

  return  <select onChange={(e) => {props.setSelectProject(e.target.value)}}>
            <option value={0}>Select Project</option>
            {projectOptions}
          </select>
}

export default ProjectSelect


// create TaskSelect and import it to Project
//create SubtaskSelect and import it to Project