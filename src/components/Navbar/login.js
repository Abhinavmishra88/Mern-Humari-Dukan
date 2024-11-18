import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!email || !password) {
      setError("Please fill all the input fields");
    } else {
      try {
        let data = await fetch("http://localhost:3000/login", {
          method: "post",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        data = await data.json();
        if (data.notfound) {
          alert("Email Id or Password is not correct");
        } else {
          alert("Login Successful");
          localStorage.setItem("user", JSON.stringify(data));
          setEmail("");
          setPassword("");
          nevigate("/");
        }
      } catch (error) {
        console.error(error);
        setError("Internal Server Error");
      }
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <div className="register_content_form">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
          />
          <button onClick={handleClick}>Login</button>
        </div>
        <a href="/signup" className="as">
          If you don't have a account? signUp Here
        </a>
      </div>
    </div>
  );
};

export default Login;
