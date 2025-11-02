import React, { useState } from "react";
import useAuth from "../context/authContext";
import auth from "../lib/auth";
import { useNavigate } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const { token, user } = await signup({ name, email, password });
    auth.token = token;
    auth.user = user;
    navigate("/dashboard");
  };

  return (
   <>
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
    Already a user? <button onClick={()=> navigate('/signin')}>Signin</button>
   </>
  );
};

export default Signup;


