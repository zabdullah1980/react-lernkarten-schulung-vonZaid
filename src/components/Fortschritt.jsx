function Fortschritt({ learnedCount, totalCount }) {
  const percentage =
    totalCount === 0
      ? 0
      : Math.round((learnedCount / totalCount) * 100);

  return (
    <section
      className="progress-card"
      aria-labelledby="progress-heading"
    >
      <div className="progress-heading-row">
        <h2 id="progress-heading">Lernfortschritt</h2>
        <strong>{percentage} %</strong>
      </div>

      <p>
        {learnedCount} von {totalCount} Lernkarten gelernt
      </p>

      <div
        className="progress-track"
        role="progressbar"
        aria-label="Lernfortschritt"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={percentage}
      >
        <div
          className="progress-value"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </section>
  );
}

export default Fortschritt;
