import React from "react";
import {Link} from "react-router-dom";
import { Box, Box2, Box3, FormField, Label, Select, button } from "../styles/Index";
import './Project.css'

function ProjectFull({setEditSubtask, setEditTask, setEditProject, selectProject, project, tasks }) {

    const HandleSelectProject = (e) => {
        setEditProject(e.target.value)}

    const HandleSelectTask = (e) => {
        setEditTask(e.target.value)}

    const HandleSelectSubtask = (e) => {
        setEditSubtask(e.target.value)}

    return  <div>
                { selectProject === null  ?

                <div> 
                    <h1>Select A Project</h1>
                </div>
                : 
                <div>
                <Box>
                    <FormField>
                        <h3>{project.title}</h3>
                        <h5>{project.description}</h5>
                        <p>{project.body}</p>
                        <h5>{project.life_cycle}</h5>
                        <h5>{project.priority}</h5>
                        <Link to="/editProject">
                            <button value={project.id} onClick={HandleSelectProject}>Edit Project</button>
                        </Link>

                        <Link to="/newTask">
                            <button value={project.id} onClick={HandleSelectProject}> add task </button>
                        </Link>                            
                    </FormField>

                    {tasks.slice(0).reverse().map((task) =>              
                    <Box2 key={task.id}>
                        <FormField>
                        <h3>{task.title}</h3>
                        <h5>{task.description}</h5>
                        <p>{task.body}</p>
                        <h5>{task.life_cycle}</h5>
                        <h5>{task.priority}</h5>
                        <Link to="/editTask">
                            <button value={task.id} onClick={HandleSelectTask}>Edit Task</button>
                        </Link>
                        <Link to="/newSubtask">
                            <button value={task.id} onClick={HandleSelectTask}> add sub </button>
                        </Link>
                        </FormField>


                    {task.subtasks.slice(0).reverse().map((subtask) =>
                    <Box3 key={subtask.id}>    
                        <FormField>
                        <h3>{subtask.title}</h3>
                        <h5>{subtask.description}</h5>
                        <p>{subtask.body}</p>
                        <h5>{subtask.life_cycle}</h5>
                        <h5>{subtask.priority}</h5>
                        <Link to="/editSubtask">
                            <button value={subtask.id} onClick={HandleSelectSubtask}>Edit Subtask</button>
                        </Link>
                    </FormField>
                    </Box3>)}

                    </Box2>)}

                </Box>
                </div>}
            </div>
}       

export default ProjectFull