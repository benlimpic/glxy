import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateProject from "./components/CreateProject";
import CreateTask from "./components/CreateTask";
import CreateSubtask from "./components/CreateSubtask";
import UpdateProject from "./components/UpdateProject";
import UpdateTask from "./components/UpdateTask";
import UpdateSubtask from "./components/UpdateSubtask";

function App() {

  const [user, setUser] = useState(null);
  const [selectProject, setSelectProject] = useState(null)
  const [editProject, setEditProject] = useState(null)
  const [editTask, setEditTask] = useState(null)
  const [editSubtask, setEditSubtask] = useState(null)

  const handleSelectProject = (e) => {
    setSelectProject(e.target.value)
  }

  console.log(editTask)

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
                    setSelectProject={handleSelectProject}
                    setEditProject={setEditProject}
                    setEditTask={setEditTask}
                    setEditSubtask={setEditSubtask} 
                    selectProject={selectProject} 
                    editProject={editProject}
                    editTask={editTask}
                    />}
                  />

        <Route path="/newProject" element={
                  <CreateProject
                    user={user} 
                    setSelectProject={setSelectProject} />}
                  />

        <Route path="/newTask" element={
                  <CreateTask
                    user={user} 
                    editProject={editProject}
                  />} />

        <Route path="/newSubtask" element={
                  <CreateSubtask
                    user={user} 
                    editTask={editTask}
                  />} />

        <Route path="/editProject" element={
                  <UpdateProject
                    user={user}
                    editProject={editProject}/>} />
        
        <Route path="/editTask" element={
                  <UpdateTask
                    user={user}
                    editTask={editTask}/>} />
        
        <Route path="/editSubtask" element={
                  <UpdateSubtask
                    user={user}
                    editSubtask={editSubtask}/>} />
                  
      </Routes>
    </main>
    </div>

  );
}

export default App;
