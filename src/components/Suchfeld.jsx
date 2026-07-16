function Suchfeld({ value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor="search">Lernkarten durchsuchen</label>

      <input
        id="search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Frage oder Antwort eingeben"
      />
    </div>
  );
}

export default Suchfeld;
