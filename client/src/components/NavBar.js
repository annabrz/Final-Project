import React from "react";
import { NavLink } from "react-router-dom"
import Header from "./Header"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "pink",
    textDecoration: "none",
    color: "white",
  };

// function NavBar() {

  const NavBar = ({ currentUser, setCurrentUser }) => {

    const handleLogout = () => {
      fetch("logout", { method: "DELETE" });
      setCurrentUser(null);
      alert("you have signed out of your account!");
    };

    return (


        <nav>
          <header>
      <h1 className = "logo">
        FlatIron Market


      </h1>
    </header>


            <NavLink to="/"

        style={linkStyles}
       > Home </NavLink>

        <NavLink to="/itemPage"

        style={linkStyles}
       > Items For Sale </NavLink>
        <NavLink to="/newItemForm"

        style={linkStyles}
       > List an Item </NavLink>

<NavLink to="/login" onClick={handleLogout} className="nav-button">
              Logout
            </NavLink>

            <NavLink className="nav-button" to="/login">
            Login
          </NavLink>
        </nav>

    );
}

export default NavBar;
