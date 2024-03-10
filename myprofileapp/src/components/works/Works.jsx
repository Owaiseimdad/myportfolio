import { useState } from "react";
import "./works.scss";

function Works() {
  const [presentSlide, setPresentSlide] = useState(1);
  const [lopacity, lsetopacity] = useState("hidden");
  const [ropacity, rsetopacity] = useState("visible");
  const clickArrow = (value) => {
    if (value == "left" && presentSlide > 1) {
      rsetopacity("visible");
      setPresentSlide(presentSlide - 1);
      if (presentSlide <= 2) {
        lsetopacity("hidden");
      }
    } else if (value == "right" && presentSlide <= 2) {
      lsetopacity("visible");
      setPresentSlide(presentSlide + 1);
      if (presentSlide >= 2) {
        rsetopacity("hidden");
      }
    }
  };
  const data = [
    {
      id: "1",
      icon: "./assets/globe.png",
      title: "Web Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      src: "google.com",
    },
    {
      id: "2",
      icon: "./assets/mobile.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      src: "google.com",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "UX/UI developer",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      src: "https://www.figma.com/file/KkBm3UQIxDRVjqIhogMKmz/Restaurant?type=design&mode=design&t=yde4MsBF6CBvrRq1-1",
    },
  ];
  return (
    <div className="works" id="works">
      <div className="slider">
        {data.map((e) => {
          if (e.id == presentSlide) {
            return (
              <div className="container">
                <div className="item">
                  <div className="left">
                    <div className="leftContainer">
                      <div className="imgContainer">
                        <img src={e.icon} />
                      </div>
                      <h2>{e.title}</h2>
                      <p>{e.desc}</p>
                      <span
                        onClick={() => {
                          window.open(e.src, "_blank");
                        }}
                      >
                        Projects
                      </span>
                    </div>
                  </div>
                  <div className="right">
                    <img src={e.img}></img>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div
        className="leftArrow"
        onClick={() => {
          clickArrow("left");
        }}
        style={{ visibility: lopacity }}
      >
        <img src="assets/down.png" />
      </div>
      <div
        className="rightArrow"
        onClick={() => {
          clickArrow("right");
        }}
        style={{ visibility: ropacity }}
      >
        <img src="assets/down.png" />
      </div>
    </div>
  );
}

export default Works;
