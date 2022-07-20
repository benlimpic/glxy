import {useState, useEffect} from 'react';
import './GalaxyBuild.css'
function GalaxyBuild({setSelectProject, project, tasks}) {

  useEffect(() => {
  const init = () => {
    document.body.classList.add("view-2D")};
  init();
  }, [setSelectProject]);

  
  return  <div>
          <div className="galaxy">
          <div id="universe" className="scale-stretched">
          <div id="galaxy">
              <div id="solar-system" className="earth">

                  <div value={project} id="sun">
                  </div>

                  {tasks.map((task, index) => 
                    <div value={task} id={`earth-${index + 1}`} className="orbit">
                      <div className="pos">
                        {task.subtasks.map((data, index) =>
                          <div value={data} className="orbit-1a">
                            <div className="pos">
                            <div className={`moon-${index + 1}`}></div>
                          </div>
                      </div>)}
                        <div className="planet"></div>
                      </div>
                    </div>)}

              </div>
          </div>
          </div>
          </div>
          </div>
  }


export default GalaxyBuild