import { Link } from "react-router-dom";

function Lernkarte({ karte, isLearned }) {
  return (
    <article
      className={`learning-card ${
        isLearned ? "learning-card-learned" : ""
      }`}
    >
      <div className="badge-row">
        <span className="badge badge-category">
          {karte.kategorie}
        </span>

        <span
          className={`badge difficulty-${karte.schwierigkeit}`}
        >
          {karte.schwierigkeit}
        </span>
      </div>

      <h2>{karte.frage}</h2>

      <p
        className={
          isLearned
            ? "learning-status learned"
            : "learning-status"
        }
      >
        {isLearned ? "Bereits gelernt" : "Noch offen"}
      </p>

      <Link
        className="button button-primary"
        to={`/karten/${karte.id}`}
      >
        Details öffnen
      </Link>
    </article>
  );
}

export default Lernkarte;
