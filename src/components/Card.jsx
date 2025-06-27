import { Link } from "react-router-dom";

export function Card({ image, title, to }) {
  return (
    <Link to={to} className="card">
      <div className="card-content">
        <img src={image} alt={title} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
