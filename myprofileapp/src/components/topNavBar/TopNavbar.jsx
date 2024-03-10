import "./topNavbar.scss";
import { Person, Mail, LinkedIn } from "@mui/icons-material";

function TopNavbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topNavBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span
              onClick={(state) => {
                navigator.clipboard.writeText(state.target.textContent);
              }}
            >
              +91 99014 88178
            </span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span
              onClick={(state) => {
                navigator.clipboard.writeText(state.target.textContent);
              }}
            >
              owaiseimdad@gmail.com
            </span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/owaise-imdad",
                  "_blank"
                );
              }}
            >
              www.linkedin.com/in/owaise-imdad
            </span>
          </div>
        </div>
        <div className="right">
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
