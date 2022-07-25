import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const ProjectOptions = ({ setSelectProject, projects }) => {


  return  <div>
            <select onChange={setSelectProject}>
              <option defaultValue="">Select Project</option>
                {projects.map(data => (
                  <option key={data.id} value={data.id}>{data.title}</option>
                ))}
            </select>
              <Link to="/newProject">
                <button>New Project</button>
              </Link>

          </div>
}
export default ProjectOptions