  
  //CREATE---------------------------------------

  // const handleCreateProject = (e) => {
  //   fetch(`/projects`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: "New Project Title",
  //       description: "Describe New Project",
  //       priority: "Set Priority",
  //       life_cycle: "Set Status",
  //       body: "New Project Details",
  //       user_id: user.id,
  //     })
  //   })
  // }

  // const handleCreateTask = (e) => {

  //   fetch(`/tasks`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: "New Task Title",
  //       description: "Describe New Task",
  //       priority: "Set Priority",
  //       life_cycle: "Set Status",
  //       body: "New Task Details",
  //       user_id: user.id,
  //       project_id: project.id
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   }
  //   )
  // }

  // const handleCreateSubtask = (e) => {

  //   fetch(`/subtasks`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       title: "New Subtask Title",
  //       description: "Describe New Subtask",
  //       priority: "Set Priority",
  //       life_cycle: "Set Status",
  //       body: "New Subtask Details",
  //       user_id: user.id,
  //       project_id: project.id,
  //       task_id: selectData.id
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   }
  //   )
  // }

  //UPDATE---------------------------------------

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

  //DELETE---------------------------------------
  
  // const handleProjectDelete = (e) => {
  //   fetch(`/projects/${project.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("Project Deleted")
  //   }
  //   )
  // }

  // const handleTaskDelete = (e) => {
  //   fetch(`/tasks/${selectData.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("Task Deleted")
  //   }
  //   )
  // }

  // const handleSubtaskDelete = (e) => {
  //   fetch(`/subtasks/${selectData.id}`, {
  //     method: 'DELETE'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("Subtask Deleted")
  //   }
  //   )
  // }