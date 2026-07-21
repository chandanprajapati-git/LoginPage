import "./File.css";
import backgroundvideo from "../assets/Video Project 1 (1).mp4";
import Navbar from "./Navbar";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const userDetail ={
    name:" ",
    email:"",
    password:""
  }
  const [data,setdata]=useState(userDetail);
  const navigate = useNavigate();
  function handleInput(event){
    console.log(event.target.value);
    console.log(event.target.name);
    const name=event.target.name;
    const value=event.target.value;
    setdata({...data,[name]:value})
  }
   function handleSubmit(event){
    event.preventDefault();
    if(data.name==""|| data.email==""|| data.password==""){
      alert("Invalid Details")
    }
    else{
const getData = JSON.parse(localStorage.getItem('user') || '[]');
    let arr=[];
    arr=[...getData];
    arr.push(data);
    localStorage.setItem("user",JSON.stringify(arr));
    alert("You are Now a Spider-Man");
    navigate('/Login');
    }
   }
  return (
    <main className="login-container">
      <video className="bg-video" autoPlay  loop playsInline>
        <source src={backgroundvideo} type="video/mp4" />
      </video>

      <Navbar />

      <form className="signup-card" onSubmit={handleSubmit}>
        <p className="eyebrow">JOIN THE WEB</p>
        <p className="signup-copy">Register to begin your Spider journey.</p>

        <label>
          Name
          <input type="text" name="name" placeholder="Enter your name" required onChange={handleInput}/>
        </label>

        <label>
          Email
          <input type="email" name="email" placeholder="Enter your email" required onChange={handleInput} />
        </label>

        <label>
          Password
          <input type="password" name="password" placeholder="Set a password" required onChange={handleInput}/>
        </label>

        <button type="submit">Sign Up</button>
        <p className="login-redirect">
          Already have an account? <a href="/Login">Log in</a>
        </p>
      </form>
    </main>
  );
}

export default Signup;
