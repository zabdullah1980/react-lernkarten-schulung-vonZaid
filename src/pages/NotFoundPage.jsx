import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="content-card centered-content">
      <p className="error-code">404</p>
      <h1>Seite nicht gefunden</h1>
      <p>
        Die aufgerufene Adresse gehört zu keiner Seite dieser
        Anwendung.
      </p>

      <div className="button-row">
        <Link className="button button-primary" to="/">
          Zur Startseite
        </Link>

        <Link
          className="button button-secondary"
          to="/karten"
        >
          Zu den Lernkarten
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
