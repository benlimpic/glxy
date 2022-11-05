import React from 'react'
import {Link} from 'react-router-dom'
import { Select, Button, Box5 } from "../styles/Index.js";

const ProjectOptions = ({ setSelectProject, selectProject, projects}) => {


  return  <Box5>
              <Select onChange={setSelectProject}>
                <option value={selectProject}>Select Project</option>
                  {projects.map(data => (
                    <option key={data.id} value={data.id}>{data.title}</option>
                  ))}
              </Select>
                <Link to="/newProject">
                  <Button>New Project</Button>
                </Link>
          </Box5>
}
export default ProjectOptions