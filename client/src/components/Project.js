import { React } from 'react'

function Project(props) {
  return  <div>
            {props.projects.map((project) => {
              return (
                <div key={project.id}>
                <h1>{project.title}</h1>
                <ul>
                  <li>{project.description}</li>
                  <li>{project.body}</li>
                  <li>{project.priority}</li>
                  <li>{project.life_cycle}</li>
                </ul>
                <div>
                {project.tasks.map((task) => {
                  return (
                    <div key={task.id}>
                    <h3>{task.title}</h3>
                    <ul>
                      <li>{task.description}</li>
                      <li>{task.body}</li>
                      <li>{task.priority}</li>
                      <li>{task.life_cycle}</li>
                    </ul>
                    <div>
                    {project.subtasks.map((subtask) => subtask.task_id === task.id ? (
                        <div key={subtask.id}>
                        <h5>{subtask.title}</h5>
                        <ul>
                          <li>{subtask.description}</li>
                          <li>{subtask.body}</li>
                          <li>{subtask.priority}</li>
                          <li>{subtask.life_cycle}</li>
                        </ul>
                        </div>)
                        : null)}
                      </div>
                    </div>)})}
                  </div>
              </div>)})}
          </div>
  }

export default Project