import React from "react";
import {Link} from "react-router-dom";
import './Project.css'

function Project({setEditSubtask, setSubtaskTask, setEditTask, setTaskProject, setEditProject, selectProject, project, tasks }) {



    return  <div>
                {selectProject === null || selectProject === "0" ?
                <div> 
                    <h1>Select A Project</h1>
                </div>
                : 
                <div>
                    <div className="dropdown">
                    
                    <h2>{project.title}</h2>

                    <div className="dropdown-content">
                        <h3>{project.title}</h3>
                        <h5>{project.description}</h5>
                        <p>{project.body}</p>
                        <h5>{project.life_cycle}</h5>
                        <h5>{project.priority}</h5>

                        <Link to="/editProject">
                            <button onClick={setEditProject(project)}>Edit Project</button>
                        </Link>

                        <button> delete </button>

                        <Link to="/newTask">
                            <button onClick={setTaskProject(project)}> add task </button>
                        </Link>
                            
                    </div>
                </div>
                    <div>
                    {tasks.slice(0).reverse().map((task) =>              
                    <div key={task.id}>
                    <div className="dropdown">
                            <h3>{task.title}</h3>

                    <div className="dropdown-content">
                        <h3>{task.title}</h3>
                        <h5>{task.description}</h5>
                        <p>{task.body}</p>
                        <h5>{task.life_cycle}</h5>
                        <h5>{task.priority}</h5>
                        <Link to="/editTask">
                            <button onClick={setEditTask(task)}>Edit Task</button>
                        </Link>

                        <button> delete </button>

                        <Link to="/newSubtask">
                            <button onClick={setSubtaskTask(task)}> add sub </button>
                        </Link>
                    </div>
                    </div>
                    <div>
                    <div>
                    {task.subtasks.slice(0).reverse().map((subtask) =>
                    <div key={subtask.id}>    
                    <div className="dropdown">
                        <h4>{subtask.title}</h4>

                    <div className="dropdown-content">
                        <h3>{subtask.title}</h3>
                        <h5>{subtask.description}</h5>
                        <p>{subtask.body}</p>
                        <h5>{subtask.life_cycle}</h5>
                        <h5>{subtask.priority}</h5>
                        <Link to="/editSubtask">
                            <button onClick={setEditSubtask(subtask)}>Edit Subtask</button>
                        </Link>

                        <button> delete </button>

                    </div>
                    </div>
                    </div>)}
                    </div>
                    </div>
                    </div>)}
                    </div>
                </div>}
            </div>
}       

export default Project