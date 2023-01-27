import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = ({ toggleCreateAccount, onSignup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        name,
      }),
    })
      .then((res) => res.json())
      .then((user) => onSignup(user));
  };

  return (
    <div className="relative top-40">
      <form className="signup-form">
        <label>Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />

        <button>
          <NavLink
            to="/"
            className="right-2 text-center mb-4"
            onClick={handleSubmit}
          >
            Create Account
          </NavLink>
        </button>
        <button className="landing-button" onClick={toggleCreateAccount}>
          Back to log in
        </button>
      </form>
    </div>
  );
};

export default Signup;
