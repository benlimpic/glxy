import React from 'react'

function TaskSelect(props) {

  const taskOptions = props.project.tasks.map((task) => {
    return <option key={task.id} value={task.id}>{task.title}</option>})

  return  <select onChange={(e) => {props.setSelectTask(e.target.value)}}>
            <option value={0}>Select Task</option>
            {taskOptions}
          </select>
}

export default TaskSelect