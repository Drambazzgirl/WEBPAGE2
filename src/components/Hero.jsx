import { useState } from "react";
import "./Hero.css";
import heroImg from "../assets/Rectangle 90.png";

export default function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="hero">

      <div className="hero-logo" style={{ fontWeight: 700, fontSize: 18, display: "flex", alignItems: "center", gap: 6 }}>
        <img src={heroImg} alt="hero" />
      </div>

      <div className="hero-content">
        <h1>Introduce your product</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod ut labore et dolore magna aliqua.
        </p>

        <h3>Sign up</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="signup-btn">Sign up</button>
      </div>

    </section>
  );
}