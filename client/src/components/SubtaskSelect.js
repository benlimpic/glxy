import React from 'react'

function SubtaskSelect(props) {

  const subtaskOptions = props.project.subtasks.map((subtask) => {
    return <option key={subtask.id} value={subtask.id}>{subtask.title}</option>})

  return  <select onChange={(e) => {props.setSelectSubtask(e.target.value)}}>
            <option value={0}>Select Subtask</option>
            {subtaskOptions}
          </select>
}

export default SubtaskSelect