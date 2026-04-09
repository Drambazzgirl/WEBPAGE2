import "./Header.css";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

export default function Header() {
  return (
    <nav className="header">
      <div className="header-logo">
        ⊛ LOGO 
      </div>
      <div className="header-icons">
        <img src={insta} alt="instagram" />
        <img src={facebook} alt="facebook" />
      </div>
    </nav>
  );
}