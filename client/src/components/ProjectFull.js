import React from "react";
import {Link} from "react-router-dom";
import { Box, Box1, Box2, Box3, Button, Error, Input, FormField, Label, Textarea, Select } from "../styles/index.js";
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
                <Box1>
                    <h1>Select A Project</h1>
                </Box1>
                : 
                <div>
                <Box1 className="Form">
                    <form>
                        <h2>{project.title}</h2>                      
                        <Label>Description:</Label>
                        <Textarea value={project.description}/>
                        <Label>Notes:</Label>
                        <Textarea value={project.body} />
                        <Label>Status:</Label>
                            <h4>{project.life_cycle}</h4>
                        <Label>Star:</Label>
                            <h4>{project.priority}</h4>
                        <Link to="/editProject">
                            <Button value={project.id} onClick={HandleSelectProject}>Edit Project</Button>
                        </Link>

                        <Link to="/newTask">
                            <Button value={project.id} onClick={HandleSelectProject}> add task </Button>
                        </Link>                            
                    </form>




                    {tasks.slice(0).reverse().map((task) =>    
                    <Box2 key={task.id}>
                        {/* openning task div */}          
                    <form>
                        <h2>{task.title}</h2>
                        <Label>Description:</Label>
                        <Textarea value={task.description}/>
                        <Label>Notes:</Label>
                        <Textarea value={task.body}/>
                        <Label>Status:</Label>
                            <h5>{task.life_cycle}</h5>
                        <Label>Planet:</Label>
                            <h5>{task.priority}</h5>
                        <Link to="/editTask">
                            <Button value={task.id} onClick={HandleSelectTask}>Edit Task</Button>
                        </Link>
                        <Link to="/newSubtask">
                            <Button value={task.id} onClick={HandleSelectTask}> add sub </Button>
                        </Link>
                    </form>





                    {task.subtasks.slice(0).reverse().map((subtask) =>
                    <Box3 key={subtask.id}>    
                    {/* openning subtask div */}  
                    <form>
                        <h2>{subtask.title}</h2>
                        <Label>Description:</Label>
                        <Textarea value={subtask.description}/>
                        <Label>Notes:</Label>
                        <Textarea value={subtask.body}/>
                        <Label>Status:</Label>
                            <h5>{subtask.life_cycle}</h5>
                        <Label>Moon:</Label>
                            <h5>{subtask.priority}</h5>
                        <Link to="/editSubtask">
                            <Button value={subtask.id} onClick={HandleSelectSubtask}>Edit Subtask</Button>
                        </Link>
                    </form>
                </Box3>)}
                </Box2>)}
                </Box1>
                </div>}
            </div>
}       

export default ProjectFull