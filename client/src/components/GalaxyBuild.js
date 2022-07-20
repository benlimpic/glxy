import {useState, useEffect} from 'react';
import './GalaxyBuild.css'
function GalaxyBuild({setSelectProject, project, tasks, subtasks}) {

  useEffect(() => {
  const init = () => {
    document.body.classList.add("view-2D")};
  init();
  }, [setSelectProject]);

  const ABC = ["a", "b", "c", "d", "e", "f", "g", "h" ]
  
  return  <div>
            <div className="galaxy">
              <div id="universe" className="scale-stretched">
                <div id="galaxy">
                  <div id="solar-system" className="earth">
                    <div value={project} id="sun"></div>


                      {tasks.map((task, index) => task.priority === "Urgent" ?
                        <div key={task.id} value={task} id={`earth-${index + 1}`} className="orbit">
                          <div className="pos">



                          {task.subtasks.map((data, index) => data.priority === 'Urgent' ?
                            <div  key={data.id} value={data} className={`orbit-1${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-1"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'High' ?
                            <div  key={data.id} value={data} className={`orbit-2${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-2"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Medium' ?
                            <div  key={data.id} value={data} className={`orbit-3${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-3"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Low' ?
                            <div  key={data.id} value={data} className={`orbit-4${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-4"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'None' ?
                            <div  key={data.id} value={data} className={`orbit-5${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-5"></div>
                              </div>
                            </div>
                            : null)}



                          <div className="planet"></div>
                        </div>
                      </div>
                      : null)}



                      {tasks.map((task, index) => task.priority === "High" ?
                        <div key={task.id} value={task} id={`mars-${index + 1}`} className="orbit">
                          <div className="pos">



                          {task.subtasks.map((data, index) => data.priority === 'Urgent' ?
                            <div  key={data.id} value={data} className={`orbit-1${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-1"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'High' ?
                            <div  key={data.id} value={data} className={`orbit-2${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-2"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Medium' ?
                            <div  key={data.id} value={data} className={`orbit-3${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-3"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Low' ?
                            <div  key={data.id} value={data} className={`orbit-4${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-4"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'None' ?
                            <div  key={data.id} value={data} className={`orbit-5${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-5"></div>
                              </div>
                            </div>
                            : null)}



                          <div className="planet"></div>
                        </div>
                      </div>
                      : null)}



                      {tasks.map((task, index) => task.priority === "Medium" ?
                        <div key={task.id} value={task} id={`jupiter-${index + 1}`} className="orbit">
                          <div className="pos">



                          {task.subtasks.map((data, index) => data.priority === 'Urgent' ?
                            <div  key={data.id} value={data} className={`orbit-1${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-1"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'High' ?
                            <div  key={data.id} value={data} className={`orbit-2${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-2"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Medium' ?
                            <div  key={data.id} value={data} className={`orbit-3${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-3"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Low' ?
                            <div  key={data.id} value={data} className={`orbit-4${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-4"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'None' ?
                            <div  key={data.id} value={data} className={`orbit-5${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-5"></div>
                              </div>
                            </div>
                            : null)}



                          <div className="planet"></div>
                        </div>
                      </div>
                      :null)}



                      {tasks.map((task, index) => task.priority === "Low" ?
                        <div key={task.id} value={task} id={`saturn-${index + 1}`} className="orbit">
                          <div className="pos">



                          {task.subtasks.map((data, index) => data.priority === 'Urgent' ?
                            <div  key={data.id} value={data} className={`orbit-1${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-1"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'High' ?
                            <div  key={data.id} value={data} className={`orbit-2${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-2"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Medium' ?
                            <div  key={data.id} value={data} className={`orbit-3${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-3"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Low' ?
                            <div  key={data.id} value={data} className={`orbit-4${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-4"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'None' ?
                            <div  key={data.id} value={data} className={`orbit-5${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-5"></div>
                              </div>
                            </div>
                            : null)}



                          <div className="planet"></div>
                        </div>
                      </div>
                      :null)}



                      {tasks.map((task, index) => task.priority === "None" ?
                        <div key={task.id} value={task} id={`uranus-${index + 1}`} className="orbit">
                          <div className="pos">



                          {task.subtasks.map((data, index) => data.priority === 'Urgent' ?
                            <div  key={data.id} value={data} className={`orbit-1${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-1"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'High' ?
                            <div  key={data.id} value={data} className={`orbit-2${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-2"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Medium' ?
                            <div  key={data.id} value={data} className={`orbit-3${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-3"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'Low' ?
                            <div  key={data.id} value={data} className={`orbit-4${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-4"></div>
                              </div>
                            </div>
                            : null)}

                          {task.subtasks.map((data, index) => data.priority === 'None' ?
                            <div  key={data.id} value={data} className={`orbit-5${ABC[index]}`}>
                              <div className="pos">
                                <div className="moon-5"></div>
                              </div>
                            </div>
                            : null)}



                          <div className="planet"></div>
                        </div>
                      </div>
                      : null)}


                  </div>
                </div>
              </div>
            </div>
          </div>
  }


export default GalaxyBuild