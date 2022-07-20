import React from "react";

function Project({project, tasks}) {

  return  <div> 

            <div key={project.id}>
                <h1>{project.title}</h1>
                <h5>{project.description}</h5>
                <h5>{project.priority}</h5>
                <h5>{project.life_cycle}</h5>
                <p>{project.body}</p>

                {tasks.slice(0).reverse().map((task) =>              
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <h5>{task.description}</h5>
                        <h5>{task.priority}</h5>
                        <h5>{task.life_cycle}</h5>
                        <p>{task.body}</p>
                          
                        {task.subtasks.slice(0).reverse().map((subtask) =>
                            <div key={subtask.id}>
                                <h1>{subtask.title}</h1>
                                <h5>{subtask.description}</h5>
                                <h5>{subtask.priority}</h5>
                                <h5>{subtask.life_cycle}</h5>
                                <p>{subtask.body}</p>
                                
                      </div>)}                            
                  </div>)}
              </div>
          </div>  
  }

export default Project