import React, {useState} from "react";

function Project({projectSelect, project, tasks}) {

    const [projectTitle, setProjectTitle] = useState(project.title);
    const [projectDescription, setProjectDescription] = useState(project.description);
    const [projectBody, setProjectBody] = useState(project.body);
    const [projectLifeCycle, setProjectLifeCycle] = useState(project.life_cycle);
    const [projectPriority, setProjectPriority] = useState(project.priority);

    console.log(projectSelect)

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        fetch(`/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                title: projectTitle,
                description: projectDescription,
                body: projectBody,
                life_cycle: projectLifeCycle,
                priority: projectPriority
            })
        })
        console.log("submit")
    }

    return  <div>

            {projectSelect === null || projectSelect === "0" ?
            <div> 
                <h1>Select A Project</h1>
            </div>
            :  
            <div>
                <h1>Project</h1>          
            <form key={project.id} onSubmit={handleProjectSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={projectTitle} required 
                onChange={(e) => setProjectTitle(e.target.value)}/>
            </div>

            <div>
                <label>Description:</label>
                <textarea rows="5" type="text" value={projectDescription} 
                onChange={(e) => setProjectDescription(e.target.value)}/>
            </div>

            <div>
                <label>Notes:</label>
                <textarea rows="10" type="text" value={projectBody} required 
                onChange={(e) => setProjectBody(e.target.value)}/>
            </div>

            <div>
                <label>Status:</label>
                <select value={projectLifeCycle} 
                onChange={(e) => setProjectLifeCycle(e.target.value)}>
                    <option value="">{project.life_cycle}</option>

                </select>
            </div>

            <div>
                <label>Priority:</label>
                <select value={projectPriority}
                onChange={(e) => setProjectPriority(e.target.value)}>
                    <option value="">{project.priority}</option>

                </select>
            </div>

            <div>
                <input type="submit" value="Update" />
                <button>Delete</button>
            </div>

                {/* <div>
                {tasks.slice(0).reverse().map((task, index) =>              
                <div key={task.id}>

                <h1>Tasks #{index += 1}</h1>

                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" required value={task.title}  />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea rows="3" type="text"  value={task.description} />
                </div>

                <div>
                    <label htmlFor="Notes">Notes:</label>
                    <textarea rows="3" type="text"  value={task.body}/>
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
                        <input type="text" required value={subtask.title}  />
                    </div>

                    <div>
                        <label htmlFor="description">Description:</label>
                        <textarea rows="3" type="text"  value={subtask.description} />
                    </div>

                    <div>
                        <label htmlFor="Notes">Notes:</label>
                        <textarea rows="3" type="text"  value={subtask.body}/>
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
                </div> */}
                </form>
                </div>}
            </div>}

export default Project