import "./portfoliolist.scss";

function Portfoliolist({ name, active, setSelectedNav, id }) {
  return (
    <li
      className={active ? "portfoliolist active" : "porfoliolist"}
      onClick={() => setSelectedNav(id)}
    >
      {name}
    </li>
  );
}

export default Portfoliolist;
