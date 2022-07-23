import React from "react";

function Project({projectSelect, project, tasks}) {

    console.log(projectSelect)

    return  <div>

            {projectSelect === null || projectSelect === "0" ?
            <div> 
                <h1>Select A Project</h1>
            </div>
            :            
            <div key={project.id}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" required id="title" autoComplete="off" value={project.title}  />
            </div>

            <div>
                <label htmlFor="description">Description:</label>
                <textarea rows="3" type="text"  id="title" autoComplete="off" value={project.description} />
            </div>

            <div>
                <label htmlFor="Notes">Notes:</label>
                <textarea rows="3" type="text"  id="title" autoComplete="off" value={project.body}/>
            </div>

            <div>
                <label htmlFor="status">Status:</label>
                <select value={project.life_cycle} >
                    <option value="">{project.life_cycle}</option>

                </select>
            </div>

            <div>
                <label htmlFor="priority">Priority:</label>
                <select value={project.priority}>
                    <option value="">{project.priority}</option>

                </select>
            </div>

            <div>
                <button>Update</button>
                <button>Delete</button>
            </div>

                <div>
                {tasks.slice(0).reverse().map((task, index) =>              
                <div key={task.id}>

                <h1>Tasks #{index += 1}</h1>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" required id="title" autoComplete="off" value={task.title}  />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea rows="3" type="text"  id="title" autoComplete="off" value={task.description} />
                </div>

                <div>
                    <label htmlFor="Notes">Notes:</label>
                    <textarea rows="3" type="text"  id="title" autoComplete="off" value={task.body}/>
                </div>

                <div>
                    <label htmlFor="status">Status:</label>
                    <select value={task.life_cycle} >
                        <option value="">{task.life_cycle}</option>

                    </select>
                </div>

                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select value={task.priority}>
                        <option value="">{task.priority}</option>

                    </select>
                </div>

                <div>
                    <button>Update</button>
                    <button>Delete</button>
                </div>
        
                    <div>
                    {task.subtasks.slice(0).reverse().map((subtask, index) =>             
                    <div key={subtask.id}>

                    <h1>Sub-Task #{index += 1}</h1>

                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" required id="title" autoComplete="off" value={subtask.title}  />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea rows="3" type="text"  id="title" autoComplete="off" value={subtask.description} />
                    </div>

                    <div>
                        <label htmlFor="Notes">Notes:</label>
                        <textarea rows="3" type="text"  id="title" autoComplete="off" value={subtask.body}/>
                    </div>

                    <div>
                        <label htmlFor="status">Status:</label>
                        <select value={subtask.life_cycle} >
                            <option value="">{subtask.life_cycle}</option>

                        </select>
                    </div>

                    <div>
                        <label htmlFor="priority">Priority:</label>
                        <select value={subtask.priority}>
                            <option value="">{subtask.priority}</option>

                        </select>
                    </div>

                    <div>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
                    </div>)}
                    </div>
                </div>)}
                </div>
                </div>}
            </div>}

export default Project