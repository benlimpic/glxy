import { useState, useEffect } from 'react'
import TaskSelect from '../components/TaskSelect'
import SubtaskSelect from '../components/SubtaskSelect'


function Project(props) {
  return  <div>
            {props.projects.map((project) => project.id === parseInt(props.selectProject) ? (
              <div key={project.id}>
                <h1>{project.title}</h1>
                <ul>
                  <li>{project.description}</li>
                  <li>{project.body}</li>
                  <li>{project.priority}</li>
                  <li>{project.life_cycle}</li>
                </ul>
                  <TaskSelect 
                  project={project} 
                  selectTask={props.selectTask}
                  setSelectTask={props.setSelectTask}
                  />
                  <div>
                    {project.tasks.map((task) => task.id === parseInt(props.selectTask) ? (
                      <div key={task.id}>
                        <h3>{task.title}</h3>
                        <ul>
                          <li>{task.description}</li>
                          <li>{task.body}</li>
                          <li>{task.priority}</li>
                          <li>{task.life_cycle}</li>
                        </ul>
                        <SubtaskSelect 
                        project={project}
                        selectTask={props.selectTask} 
                        selectSubtask={props.selectSubtask}
                        setSelectSubtask={props.setSelectSubtask}
                        />
                          <div>
                          {project.subtasks.map((subtask) => subtask.id === parseInt(props.selectSubtask) ? (
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
                    </div>)
                  : null)}
                </div>
              </div>)
            : null)}
          </div>
  }

export default Project