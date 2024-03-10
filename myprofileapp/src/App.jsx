import Intro from "./components/intro/Intro";
import TopNavbar from "./components/topNavBar/TopNavbar";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Contacts from "./components/contacts/Contacts";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
