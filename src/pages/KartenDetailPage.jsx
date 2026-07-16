import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

function KartenDetailPage({
  lernkarten,
  learnedCardIds,
  onMarkAsLearned,
  onRemoveLearnedStatus,
}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);

  const cardId = Number(id);

  const karte = lernkarten.find(
    (item) => item.id === cardId
  );

  useEffect(() => {
    setShowAnswer(false);
  }, [id]);

  if (!karte) {
    return (
      <section className="content-card centered-content">
        <p className="error-code">Nicht gefunden</p>
        <h1>Lernkarte nicht gefunden</h1>
        <p>
          Für die angegebene Adresse existiert keine
          Lernkarte.
        </p>

        <Link
          className="button button-primary"
          to="/karten"
        >
          Zur Lernkartenübersicht
        </Link>
      </section>
    );
  }

  const isLearned = learnedCardIds.includes(karte.id);

  const currentIndex = lernkarten.findIndex(
    (item) => item.id === karte.id
  );

  const previousCard =
    currentIndex > 0
      ? lernkarten[currentIndex - 1]
      : null;

  const nextCard =
    currentIndex < lernkarten.length - 1
      ? lernkarten[currentIndex + 1]
      : null;

  function goToPreviousCard() {
    if (previousCard) {
      navigate(`/karten/${previousCard.id}`);
    }
  }

  function goToNextCard() {
    if (nextCard) {
      navigate(`/karten/${nextCard.id}`);
    }
  }

  return (
    <article
      className={`detail-card ${
        isLearned ? "detail-card-learned" : ""
      }`}
    >
      <div className="detail-top-row">
        <Link className="text-link" to="/karten">
          Zurück zur Übersicht
        </Link>

        <span>
          Karte {currentIndex + 1} von {lernkarten.length}
        </span>
      </div>

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

      <h1>{karte.frage}</h1>

      <p
        className={
          isLearned
            ? "learning-status learned"
            : "learning-status"
        }
      >
        {isLearned
          ? "Diese Lernkarte ist als gelernt markiert."
          : "Diese Lernkarte ist noch offen."}
      </p>

      <section className="answer-area">
        {!showAnswer && (
          <p>
            Überlegen Sie zunächst selbst und blenden Sie
            anschließend die Antwort ein.
          </p>
        )}

        {showAnswer && (
          <section
            className="answer-box"
            aria-labelledby="answer-heading"
          >
            <h2 id="answer-heading">Antwort</h2>
            <p>{karte.antwort}</p>
          </section>
        )}

        <button
          className="button button-secondary"
          type="button"
          onClick={() => setShowAnswer((visible) => !visible)}
          aria-expanded={showAnswer}
        >
          {showAnswer
            ? "Antwort ausblenden"
            : "Antwort anzeigen"}
        </button>
      </section>

      <section className="learning-actions">
        {!isLearned ? (
          <button
            className="button button-primary"
            type="button"
            onClick={() => onMarkAsLearned(karte.id)}
          >
            Als gelernt markieren
          </button>
        ) : (
          <button
            className="button button-danger"
            type="button"
            onClick={() =>
              onRemoveLearnedStatus(karte.id)
            }
          >
            Lernstatus entfernen
          </button>
        )}
      </section>

      <nav
        className="card-navigation"
        aria-label="Zwischen Lernkarten wechseln"
      >
        <button
          className="button button-secondary"
          type="button"
          onClick={goToPreviousCard}
          disabled={!previousCard}
        >
          Vorherige Karte
        </button>

        <button
          className="button button-secondary"
          type="button"
          onClick={goToNextCard}
          disabled={!nextCard}
        >
          Nächste Karte
        </button>
      </nav>
    </article>
  );
}

export default KartenDetailPage;
