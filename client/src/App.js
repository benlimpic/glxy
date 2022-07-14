import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";



function App() {

  const [user, setUser] = useState(null);

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
        <Home path="/" element={<Home/>} />
    </main>
    </div>

  );
}

export default App;
