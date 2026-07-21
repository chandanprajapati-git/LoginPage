import Navbar from "./Navbar";

function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <button className="logout-button" type="button">Log Out</button>
      <section className="home-content">
        <p className="eyebrow">YOUR SPACE</p>
        <h1>Welcome to Home Page!</h1>
        <p>You're signed in and ready to explore.</p>
      </section>
    </main>
  );
}

export default Home;
