import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <section id="home" className="section hero">
        <h1>Home</h1>
        <p>Welcome to the Interactive Navbar Demo</p>
      </section>

      <section id="about" className="section about">
        <h1>About</h1>
        <p>This navbar changes style on scroll and supports smooth navigation.</p>
      </section>

      <section id="services" className="section services">
        <h1>Services</h1>
        <p>Hover effects and responsive design included.</p>
      </section>

      <section id="contact" className="section contact">
        <h1>Contact</h1>
        <p>Here ends the task 1.</p>
      </section>
    </div>
 );
}

export default App;