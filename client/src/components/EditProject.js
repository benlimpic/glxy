import {useState, useEffect} from 'react'
import {Link} from "react-router-dom";

function EditProject(props) {

//   console.log(props.editProject)

//   const [project, setProject] = useState([])
//   const [title, setTitle] = useState([]);
//   const [description, setDescription] = useState([]);
//   const [body, setBody] = useState([]);
//   const [lifeCycle, setLifeCycle] = useState([]);
//   const [priority, setPriority] = useState([]);

//   useEffect(() => {
//     fetch(`/projects/${props.editProject}`)
//     .then(res => res.json())
//     .then(data => {
//       setProject(data)
//     }
//     )
//   }, [])

//     console.log(project)

//   const handleProjectSubmit = (e) => {
//     e.preventDefault();
//     fetch(`/projects/${props.editProject}`, {
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             title,
//             description,
//             body,
//             lifeCycle,
//             priority
//         })
//     })
// }

//   const handleDeleteProject = () => {
//     fetch(`/projects/${props.editProject}`, {
//         method: "DELETE"
//     })
//   }



  return  
  // <div>         
  //           <form key={props.editProject} onSubmit={handleProjectSubmit}>
  //             <div>
  //                 <label>Title:</label>
  //                 <input type="text" value={project.title} required 
  //                 onChange={(e) => setTitle(e.target.value)}/>
  //             </div>

  //             <div>
  //                 <label>Description:</label>
  //                 <textarea rows="5" type="text" value={project.description} 
  //                 onChange={(e) => setDescription(e.target.value)}/>
  //             </div>

  //             <div>
  //                 <label>Notes:</label>
  //                 <textarea rows="10" type="text" value={project.body} required 
  //                 onChange={(e) => setBody(e.target.value)}/>
  //             </div>

  //             <div>
  //                 <label>Status:</label>
  //                 <select value={project.life_cycle} 
  //                 onChange={(e) => setLifeCycle(e.target.value)}>
  //                           <option value="">Choose A Status</option>
  //                           <option value="Assigned">Assigned</option>
  //                           <option value="In Progress">In Progress</option>
  //                           <option value="Ready For Review">Ready For Review</option>
  //                           <option value="Edit Requested">Edit Requested</option>
  //                           <option value="Completed">Completed</option>
  //                 </select>
  //             </div>

  //             <div>
  //                 <label>Priority:</label>
  //                 <select value={project.priority}
  //                 onChange={(e) => setPriority(e.target.value)}>
  //                           <option value="">Choose A Priority</option>
  //                           <option value="Urgent">Urgent</option>
  //                           <option value="High">High</option>
  //                           <option value="Medium">Medium</option>
  //                           <option value="Low">Low</option>
  //                           <option value="None">None</option>
  //                 </select>
  //             </div>

  //             <div>
  //                 <input type="submit" value="Update" />


  //               <Link to="/">
  //                 <button>Back</button>
  //               </Link>

  //               <Link to="/">
  //                 <button onClick={handleDeleteProject}>Delete</button>
  //               </Link>
  //             </div>
  //           </form>
  //   </div>
}
export default EditProject