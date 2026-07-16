const routerBegriffe = [
  {
    begriff: "BrowserRouter",
    erklaerung:
      "Stellt den Routing-Kontext für die gesamte Anwendung bereit und synchronisiert die Oberfläche mit der Browseradresse.",
  },
  {
    begriff: "Routes",
    erklaerung:
      "Enthält die möglichen Routen und wählt die zur aktuellen URL passende Route aus.",
  },
  {
    begriff: "Route",
    erklaerung:
      "Verbindet einen URL-Pfad mit der React-Komponente, die für diesen Pfad angezeigt wird.",
  },
  {
    begriff: "Link und NavLink",
    erklaerung:
      "Ermöglichen Navigation innerhalb der Anwendung, ohne die gesamte HTML-Seite neu zu laden. NavLink kann zusätzlich den aktiven Navigationszustand darstellen.",
  },
  {
    begriff: "useParams",
    erklaerung:
      "Liest dynamische Werte aus einer URL, beispielsweise die ID aus /karten/5.",
  },
  {
    begriff: "useNavigate",
    erklaerung:
      "Ermöglicht programmatische Navigation, zum Beispiel beim Wechsel zur nächsten Lernkarte.",
  },
];

function ProjektPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">Hintergrund</p>
        <h1>Über das Projekt</h1>
        <p>
          Die Lernkarten-App verbindet bekannte
          React-Grundlagen mit clientseitigem Routing.
        </p>
      </section>

      <section className="content-card">
        <h2>Verbindung zur To-do-App</h2>
        <p>
          Komponenten, Props, State, Events, map(), filter()
          und unveränderliche Aktualisierungen bleiben
          erhalten. Neu hinzu kommen mehrere Seiten,
          dynamische URLs und eine dauerhafte Speicherung des
          Lernstatus.
        </p>
      </section>

      <section className="content-card">
        <h2>React Router</h2>

        <dl className="definition-list">
          {routerBegriffe.map((eintrag) => (
            <div key={eintrag.begriff}>
              <dt>{eintrag.begriff}</dt>
              <dd>{eintrag.erklaerung}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="content-card">
        <h2>localStorage</h2>
        <p>
          Der Browser speichert die IDs gelernter Karten
          lokal. Dadurch bleibt der Lernfortschritt nach einem
          Neuladen erhalten. localStorage ersetzt in diesem
          Projekt kein Backend und gilt nur für den jeweils
          verwendeten Browser.
        </p>
      </section>
    </>
  );
}

export default ProjektPage;
