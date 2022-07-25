import React, { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UpdateProject from "./components/UpdateProject";
import CreateProject from "./components/CreateProject";

function App() {

  const [user, setUser] = useState(null);
  const [selectProject, setSelectProject] = useState(null)
  const [editProject, setEditProject] = useState(null)

  const handleSelectProject = (e) => {
    setSelectProject(e.target.value)
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
                    setSelectProject={handleSelectProject}
                    setEditProject={setEditProject}
                    editProject={editProject}
                    selectProject={selectProject} />}
                  />

        <Route path="/newProject" element={
                  <CreateProject
                    user={user} 
                    setSelectProject={setSelectProject} />}
                  />
        <Route path={`/editProject`} element={
                  <UpdateProject
                    user={user}
                    editProject={editProject}/>} />
      </Routes>
    </main>
    </div>

  );
}

export default App;
