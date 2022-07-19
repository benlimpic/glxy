import React, { useState, useEffect } from "react";

function Project({user, project, tasks, selectData, setSelectData}) {

  const handleCreateTask = (e) => {

    fetch(`/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: "New Task Title",
        description: "Describe New Task",
        priority: "Set Priority",
        life_cycle: "Set Status",
        body: "New Task Details",
        user_id: user.id,
        project_id: project.id
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    }
    )
  }

  const handleCreateSubtask = (e) => {

    fetch(`/subtasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: "New Subtask Title",
        description: "Describe New Subtask",
        priority: "Set Priority",
        life_cycle: "Set Status",
        body: "New Subtask Details",
        user_id: user.id,
        project_id: project.id,
        task_id: selectData.id
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    }
    )
  }

  // const handleProjectPatch = (e) => {
  //   e.preventDefault()
  //   fetch(`/projects/${project.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: e.target.title.value,
  //       description: e.target.description.value,
  //       priority: e.target.priority.value,
  //       life_cycle: e.target.life_cycle.value,
  //       body: e.target.body.value
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   }
  //   )
  // }

  // const handleTaskPatch = (e) => {
  //   e.preventDefault()
  //   fetch(`/tasks/${selectData.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: e.target.title.value,
  //       description: e.target.description.value,
  //       priority: e.target.priority.value,
  //       life_cycle: e.target.life_cycle.value,
  //       body: e.target.body.value
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   }
  //   )
  // }

  // const handleSubtaskPatch = (e) => {
  //   e.preventDefault()
  //   fetch(`/subtasks/${selectData.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: e.target.title.value,
  //       description: e.target.description.value,
  //       priority: e.target.priority.value,
  //       life_cycle: e.target.life_cycle.value,
  //       body: e.target.body.value
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   }
  //   )
  // }

  const handleProjectDelete = (e) => {
    fetch(`/projects/${project.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log("Project Deleted")
    }
    )
  }

  const handleTaskDelete = (e) => {
    fetch(`/tasks/${selectData.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log("Task Deleted")
    }
    )
  }

  const handleSubtaskDelete = (e) => {
    fetch(`/subtasks/${selectData.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log("Subtask Deleted")
    }
    )
  }
  


  return  <div> 

            <div key={project.id}>
                <h1>{project.title}</h1>
                <h5>{project.description}</h5>
                <h5>{project.priority}</h5>
                <h5>{project.life_cycle}</h5>
                <p>{project.body}</p>

                <button 
                    onClick={(e) => {
                      setSelectData(project)
                      handleProjectDelete(e)}}>
                      Delete
                </button>
                <button 
                    onClick={(e) => {
                      setSelectData(project)
                      handleCreateTask(e)}}>
                      Add New Task
                </button>

                {tasks.slice(0).reverse().map((task) =>              
                    <div key={task.id}>
                        <h1>{task.title}</h1>
                        <h5>{task.description}</h5>
                        <h5>{task.priority}</h5>
                        <h5>{task.life_cycle}</h5>
                        <p>{task.body}</p>

                        <button 
                            onClick={(e) => {
                              setSelectData(task); 
                              handleTaskDelete(e);}}>
                              Delete
                        </button>
                        <button 
                            onClick={(e) => {
                              setSelectData(task); 
                              handleCreateSubtask(e)}}>
                              Add New Subtask
                        </button>
                          
                        {task.subtasks.slice(0).reverse().map((subtask) =>
                            <div key={subtask.id}>
                                <h1>{subtask.title}</h1>
                                <h5>{subtask.description}</h5>
                                <h5>{subtask.priority}</h5>
                                <h5>{subtask.life_cycle}</h5>
                                <p>{subtask.body}</p>
                                
                                <button 
                                    onClick={(e) => {
                                      setSelectData(subtask);
                                      handleSubtaskDelete(e)}}>
                                      Delete
                                </button>
                        </div>)}                            
                </div>)}
            </div>
          </div>  
  }

export default Project