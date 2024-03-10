import { useEffect, useState } from "react";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import "./portfolio.scss";

import { webPortfolio, mobilePortfolio, designPortfolio } from "../../data";

function Portfolio() {
  const [selectedNav, setSelectedNav] = useState("web");
  const [data, setSelectData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (selectedNav) {
      case "mobile":
        setSelectData(mobilePortfolio);
        break;
      case "desgin":
        setSelectData(designPortfolio);
        break;
      case "web":
        setSelectData(webPortfolio);
        break;
      default:
        setSelectData(webPortfolio);
    }
  }, [selectedNav]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Porfolio</h1>
      <ul>
        {list.map((e) => (
          <Portfoliolist
            name={e.title}
            active={selectedNav === e.id}
            setSelectedNav={setSelectedNav}
            id={e.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt={d.id} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
