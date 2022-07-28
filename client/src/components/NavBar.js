import React from "react";
import { FormField, Label, Select, Button } from "./styles";


function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className="navbar">
      <nav>
        <h2>Glxy</h2>
        <button variant="fill" onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>

    </div>
  );
}


export default NavBar;