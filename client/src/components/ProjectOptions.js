import React from 'react'
import {Link} from 'react-router-dom'
// import { FormField, Label, Select, Button } from "./styles";

const ProjectOptions = ({ setSelectProject, projects }) => {

  


  return  <div>
            <select onChange={setSelectProject}>
              <option value="null" selected disabled hidden>Select Project</option>
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