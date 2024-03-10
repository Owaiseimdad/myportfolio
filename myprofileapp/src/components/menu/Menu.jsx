import "./menu.scss";
import { Person, Mail, LinkedIn } from "@mui/icons-material";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#intro">Intro</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(!menuOpen)}>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
