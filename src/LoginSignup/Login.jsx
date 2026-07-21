import backgroundvideo from "../assets/Video Project 1 (1).mp4";
import backgroundvideo1 from "../assets/Video Project 2.mp4";
import Navbar from "./Navbar";
function Login(){
  return(
    <div>
      <main className="login-container">
            <video className="bg-video" autoPlay loop playsInline>
              <source src={backgroundvideo1} type="video/mp4" />
            </video>
            <Navbar/>
            <form className="signup-card">
              <p className="eyebrow">JOIN THE WEB</p>
              <p className="signup-copy">Login to your Spider Account.</p>
              <label>
                Email
                <input type="email" name="email" placeholder="Enter your email" required />
              </label>
      
              <label>
                Password
                <input type="password" name="password" placeholder="Set a password" required />
              </label>
      
              <button type="submit">Log In</button>
              <p className="login-redirect">
                If You Want To Create Account? <a href="/">Sign Up</a>
              </p>
            </form>
          </main>
    </div>
  );
} export default Login;