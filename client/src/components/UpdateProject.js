import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function UpdateProject(props) {
  
  return (
    <div>
      <h3>update project</h3>
      <h1>{props.editProject.title}</h1>

      <Link to="/">
        <button> cancel </button>
      </Link>

    </div>
  )
}

export default UpdateProject