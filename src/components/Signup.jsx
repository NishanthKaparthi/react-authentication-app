import { useState } from "react";
import apiClient from "../api/apiClient";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
     try{
        const response = await apiClient.post("/signup", formData);
        // Axios wraps the response data in a 'data' property
        // The actual response body is in response.data
        const message = response.data;
        // Axios throws an error for non-2xx status codes,
        // so if we reach here, it means the request was successful (2xx status)
        alert(message);
        setFormData({name: "", email: "", password: ""});

    }
    catch (error) {
      //if(error.response) means checking whether it is returned from the server as a response for the HTTP call
      if(error.response) {
        alert("Signup Failed: ", error.response.data);
        console.log(error.response);
      }
      // The request was made but no response was received
      else if (error.request) {
        console.log("No response received: ", error.request);
        alert("Signup failed: No response from server. Please try again later.")
      }
      // Something happened in setting up the request that triggered an Error
      else {
        console.log("Error setting up request: ". error.message);
        alert("Signup failed: An unexpected error occurred. Please try again.");
      }
    } 
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <br />
        <br />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
