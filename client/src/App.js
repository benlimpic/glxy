import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditProject from "./components/EditProject";
import CreateProject from "./components/CreateProject";





function App() {

  const [user, setUser] = useState(null);
  const [project, setProject] = useState([])
  const [projects, setProjects] = useState([])
  const [tasks, setTasks] = useState([])
  const [subtasks, setSubtasks] = useState([])
  const [selectProject, setSelectProject] = useState(null)
  const [editProject, setEditProject] = useState(null)


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login user={user} onLogin={setUser} />;

  
  return (

    <div className="app">
      <NavBar user={user} setUser={setUser} />
    <main>
      <Routes>
        <Route path="/" element={
                <Home 
                  user={user}
                  setProject={setProject}
                  project={project}
                  setProjects={setProjects}
                  projects={projects}
                  setTasks={setTasks}
                  tasks={tasks}
                  setSubtasks={setSubtasks}
                  subtasks={subtasks}
                  setEditProject={setEditProject}
                  setSelectProject={setSelectProject}
                  selectProject={selectProject}
                />}/>
        <Route path="/edit-project" element={
                <EditProject 
                setSelectProject={setSelectProject}
                editProject={editProject}
                />}/>
        <Route path="/new-project" element={
                <CreateProject
                user={user} 
                setSelectProject={setSelectProject}
                />}/>
      </Routes>
    </main>
    </div>

  );
}

export default App;
