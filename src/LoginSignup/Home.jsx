import Navbar from "./Navbar";
import backgroundvideo2 from "../assets/akashxeffects.mp4"
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  function signout(){
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <main className="home-page">
      <video className="bg-video" autoPlay loop playsInline>
      <source src={backgroundvideo2} type="video/mp4" />
      </video>
      <Navbar />
      <button className="logout-button" onClick={signout} type="button">Sign Out</button>
      <section className="home-content">
        <p className="eyebrow">Avenger Zone</p>
        <h1>Hey! Spider-Man</h1>
        <p>Ready for Fight?</p>
      </section>
    </main>
  );
}

export default Home;
