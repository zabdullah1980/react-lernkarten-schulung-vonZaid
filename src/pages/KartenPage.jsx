import { useState } from "react";
import Suchfeld from "../components/Suchfeld";
import KategorieFilter from "../components/KategorieFilter";
import Fortschritt from "../components/Fortschritt";
import LernkartenListe from "../components/LernkartenListe";

function KartenPage({
  lernkarten,
  learnedCardIds,
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredCards = lernkarten.filter((karte) => {
    const matchesSearch =
      karte.frage.toLowerCase().includes(normalizedSearch) ||
      karte.antwort.toLowerCase().includes(normalizedSearch);

    const matchesCategory =
      category === "Alle" ||
      karte.kategorie === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Übersicht</p>
        <h1>Lernkartenübersicht</h1>
        <p>
          Durchsuchen Sie die Karten und öffnen Sie eine
          Detailseite, um die Antwort zu prüfen.
        </p>
      </section>

      <Fortschritt
        learnedCount={learnedCardIds.length}
        totalCount={lernkarten.length}
      />

      <section
        className="filter-card"
        aria-label="Lernkarten filtern"
      >
        <Suchfeld
          value={search}
          onChange={setSearch}
        />

        <KategorieFilter
          value={category}
          onChange={setCategory}
        />
      </section>

      <p className="result-count" aria-live="polite">
        {filteredCards.length} von {lernkarten.length} Karten
        werden angezeigt.
      </p>

      <LernkartenListe
        lernkarten={filteredCards}
        learnedCardIds={learnedCardIds}
      />
    </>
  );
}

export default KartenPage;
