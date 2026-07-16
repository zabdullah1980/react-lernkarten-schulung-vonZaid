import { Link } from "react-router-dom";
import Fortschritt from "../components/Fortschritt";

const konzepte = [
  "Komponenten",
  "Props",
  "State",
  "Events",
  "Listen",
  "Filter",
  "Routing",
  "dynamische URL-Parameter",
  "localStorage",
];

function HomePage({ learnedCount, totalCount }) {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">Fortsetzungsprojekt</p>
        <h1>React-Lernkarten-App</h1>

        <p className="hero-text">
          Diese Anwendung baut auf der React-To-do-Liste auf.
          Bereits bekannte Konzepte werden wiederholt und um
          mehrere Seiten, Routing und gespeicherten
          Lernfortschritt erweitert.
        </p>

        <Link
          className="button button-primary"
          to="/karten"
        >
          Lernkarten öffnen
        </Link>
      </section>

      <Fortschritt
        learnedCount={learnedCount}
        totalCount={totalCount}
      />

      <section className="content-card">
        <h2>Verwendete Konzepte</h2>

        <ul className="concept-list">
          {konzepte.map((konzept) => (
            <li key={konzept}>{konzept}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default HomePage;
