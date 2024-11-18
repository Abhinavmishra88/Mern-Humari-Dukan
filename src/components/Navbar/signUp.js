import React, { useState } from "react";
import "./signup.css";
import { Link,useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit =async (e) => {
  
    if (name && email && password) {
      let result = await fetch("http://localhost:3000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Signup successfully");
      navigate("/login"); // Set redirect state to true
    } else {
      alert("Please fill all the input boxes");
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <div className="register_content_form">
          <input
            type="text"
            placeholder="User Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Uncomment the following lines if you want to implement file upload */}
          {/* <input
            type="file"
            name="profileImage"
            id="image"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/421/494/original/upload-icon-vector-illustration.jpg"
              alt="Add Profile Photo"
            />
            <p>Upload your photo</p>
          </label> */}

          {/* Display uploaded profile image (if needed) */}
          {/* {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile Photo"
              style={{ width: "55px" }}
            />
          )} */}

          <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
        </div>
        <Link to="/login" className="as">
          Already have an account? Login Here
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
