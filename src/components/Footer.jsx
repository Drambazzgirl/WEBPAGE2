import { useState } from "react";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Get Access Section */}
      <section className="cta">
        <div>
          <h2>Get access</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div>
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

      {/* Footer Bar */}
      <footer className="footer">
        <div className="footer-logo">
          ⊛ LOGO          {/* ← logo.png இல்ல, text use பண்றோம் */}
        </div>
        <div className="footer-icons">
          <img src={insta} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
      </footer>
    </>
  );
}