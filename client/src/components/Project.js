import React from "react";
import {Link} from "react-router-dom";
import './Project.css'

function Project({setEditSubtask, setEditTask, setEditProject, selectProject, project, tasks }) {

    const HandleSelectProject = (e) => {
        setEditProject(e.target.value)
    }

    const HandleSelectTask = (e) => {
        setEditTask(e.target.value)
    }

    const HandleSelectSubtask = (e) => {
        setEditSubtask(e.target.value)
    }


    return  <div>
                { selectProject === null  ?
                <div> 
                    <h1>Select A Project</h1>
                </div>
                : 
                <div>
                    <div className="dropdown-project">
                    
                    <h2>{project.title}</h2>

                    <div className="dropdown-project-content">
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
                            
                    </div>
                </div>
                    <div>
                    <ul>

                    {tasks.slice(0).reverse().map((task) =>              
                    <li>
                    <div key={task.id}>
                    <div className="dropdown-task">
                            <h2>{task.title}</h2>

                    <div className="dropdown-task-content">
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
                    </div>
                    </div>
                    <div>
                    <div>
                    <ul>

                    {task.subtasks.slice(0).reverse().map((subtask) =>
                    <li>
                    <div key={subtask.id}>    
                    <div className="dropdown-subtask">
                        <h3>{subtask.title}</h3>

                    <div className="dropdown-subtask-content">
                        <h3>{subtask.title}</h3>
                        <h5>{subtask.description}</h5>
                        <p>{subtask.body}</p>
                        <h5>{subtask.life_cycle}</h5>
                        <h5>{subtask.priority}</h5>
                        <Link to="/editSubtask">
                            <button value={subtask.id} onClick={HandleSelectSubtask}>Edit Subtask</button>
                        </Link>
                    </div>
                    </div>
                    </div>
                    </li>)}
                    </ul>
                    </div>
                    </div>
                    </div>
                    </li>)}
                    </ul>
                    </div>
                </div>}
            </div>
}       

export default Project