import Lernkarte from "./Lernkarte";

function LernkartenListe({
  lernkarten,
  learnedCardIds,
}) {
  if (lernkarten.length === 0) {
    return (
      <p className="empty-message" role="status">
        Zu Ihrer Suche wurden keine Lernkarten gefunden.
      </p>
    );
  }

  return (
    <section
      className="card-grid"
      aria-label="Gefundene Lernkarten"
    >
      {lernkarten.map((karte) => (
        <Lernkarte
          key={karte.id}
          karte={karte}
          isLearned={learnedCardIds.includes(karte.id)}
        />
      ))}
    </section>
  );
}

export default LernkartenListe;
