import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import EditProject from "./components/EditProject";
import CreateProject from "./components/CreateProject";

function App() {

  const [user, setUser] = useState(null);
  const [selectProject, setSelectProject] = useState(null)
  const [editProject, setEditProject] = useState(null)

  const handleSelectProject = (e) => {
    setSelectProject(e.target.value)
  }
  
  const handleSetProjectEdit = (e) => {
    setEditProject(e.target.value)
  }



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
                    setEditProject={handleSetProjectEdit}
                    setSelectProject={handleSelectProject}
                    selectProject={selectProject} />}
                  />
        <Route path="/editProject" element={
                  <EditProject 
                    setSelectProject={handleSelectProject}
                    editProject={editProject} />}
                  />
        <Route path="/newProject" element={
                  <CreateProject
                    user={user} 
                    setSelectProject={setSelectProject} />}
                  />
      </Routes>
    </main>
    </div>

  );
}

export default App;
