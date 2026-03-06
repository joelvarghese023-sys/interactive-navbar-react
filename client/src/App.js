import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <section id="home" className="section hero">
        <div className="section-content">
          <p className="eyebrow"> Navigation</p>
          <h1> Interactive Navbar</h1>
          <p>
            directs you on a click
          </p>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-content">
          
          <h2>ABOUT</h2>
          <p>
            The Information  related to  the company are preseted here!
          </p>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="section-content">
          
          <h2>SERVICES</h2>
          <p>
            The services provided by the company are listed here!!
          </p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-content">
         
          <h2>CONTACTS</h2>
          <p>
            The detais like phone number or emailid are provided here for communication purpose!!
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
