import React, { useState } from "react";
import useAuth from "../context/authContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup } = useAuth();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const data  = await signup({ name, email, password });
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Enter Email"
      ></input>

      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Enter Name"
      ></input>

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Password"
      ></input>

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
