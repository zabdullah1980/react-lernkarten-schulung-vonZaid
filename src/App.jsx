import { useEffect, useState } from "react";
import {
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import KartenPage from "./pages/KartenPage";
import KartenDetailPage from "./pages/KartenDetailPage";
import ProjektPage from "./pages/ProjektPage";
import NotFoundPage from "./pages/NotFoundPage";
import lernkarten from "./data/lernkarten";
import "./App.css";

const STORAGE_KEY = "learnedCardIds";

function loadLearnedCardIds() {
  try {
    const savedIds = localStorage.getItem(STORAGE_KEY);

    if (!savedIds) {
      return [];
    }

    const parsedIds = JSON.parse(savedIds);

    if (!Array.isArray(parsedIds)) {
      return [];
    }

    return parsedIds.filter(
      (id) =>
        Number.isInteger(id) &&
        lernkarten.some((karte) => karte.id === id)
    );
  } catch {
    return [];
  }
}

function App() {
  const [learnedCardIds, setLearnedCardIds] =
    useState(loadLearnedCardIds);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(learnedCardIds)
    );
  }, [learnedCardIds]);

  function markAsLearned(id) {
    setLearnedCardIds((currentIds) => {
      if (currentIds.includes(id)) {
        return currentIds;
      }

      return [...currentIds, id];
    });
  }

  function removeLearnedStatus(id) {
    setLearnedCardIds((currentIds) =>
      currentIds.filter((cardId) => cardId !== id)
    );
  }

  return (
    <HashRouter>
      <div className="site-shell">
        <Header />

        <main className="page-container">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  learnedCount={learnedCardIds.length}
                  totalCount={lernkarten.length}
                />
              }
            />

            <Route
              path="/karten"
              element={
                <KartenPage
                  lernkarten={lernkarten}
                  learnedCardIds={learnedCardIds}
                />
              }
            />

            <Route
              path="/karten/:id"
              element={
                <KartenDetailPage
                  lernkarten={lernkarten}
                  learnedCardIds={learnedCardIds}
                  onMarkAsLearned={markAsLearned}
                  onRemoveLearnedStatus={removeLearnedStatus}
                />
              }
            />

            <Route
              path="/projekt"
              element={<ProjektPage />}
            />

            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>
            React-Lernkarten-App · Schulungsprojekt von
            Mathias Ellmann
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
