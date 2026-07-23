import { useState } from "react";
import backgroundvideo1 from "../assets/Video Project 3.mp4";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function Login(){
  const [email,setemail]=useState("");
  const [pass,setpass]=useState("");
  const [msg,setmsg]=useState("");
  const navigate = useNavigate();
  function handleInput(event){
    const value = event.target.value;
    const name = event.target.name;
    if("email"===name){
      setemail(value);
    }
    if("password"===name){
      setpass(value);
    }
  }
  function handleSubmit(event){
    event.preventDefault();
    if(email=="" || pass==""){
      alert("Enter Passcode");
    }
    else{
      let getdetails=JSON.parse(localStorage.getItem("user"));
    console.log(getdetails);
    const user=getdetails.find((currentvalue )=>{
      let storeEmail = currentvalue.email;
        let storePassword = currentvalue.password;
        return storeEmail == email && storePassword == pass;})
      if(user){
        alert("Welcome Spider-Man");
        navigate("/Home");
      }else{
        alert("You Are Not A Spider-Man");
      }
    }
    
  }
  return(
    <div>
      <main className="login-container">
            <video className="bg-video" autoPlay loop playsInline>
              <source src={backgroundvideo1} type="video/mp4" />
            </video>
            <Navbar/>
            <form onSubmit={handleSubmit} className="signup-card">
              <p className="eyebrow">JOIN THE WEB</p>
              <p className="signup-copy">Login to your Spider Account.</p>
              <label>
                Email
                <input type="email" name="email" placeholder="Enter your email" required onChange={handleInput} />
              </label>
      
              <label>
                Password
                <input type="password" name="password" placeholder="Enter password" required onChange={handleInput} />
              </label>
      
              <button type="submit">Sign In</button>
              <p className="login-redirect">
                If You Want To Create Account? <a href="/">Sign Up</a>
              </p>
            </form>
          </main>
    </div>
  );
} export default Login;