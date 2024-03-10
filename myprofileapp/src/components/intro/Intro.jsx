import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 100,
      strings: ["Solution Engineer", "Software Developer", "Mobile Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/profile.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Hi There! I'm</h2>
          <h1> Owaise Imdad</h1>
          <h3>
            Profession: <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
