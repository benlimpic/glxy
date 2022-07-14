import React from 'react'

function SubtaskSelect(props) {

  const subtaskOptions = props.project.subtasks.map((subtask) => 
    subtask.task_id === parseInt(props.selectTask) ? (
      <option key={subtask.id} value={subtask.id}>{subtask.title}</option> ) : null)

  return  <select onChange={(e) => {props.setSelectSubtask(e.target.value)}}>
            <option value={0}>Select Subtask</option>
            {subtaskOptions}
          </select>
}

export default SubtaskSelect