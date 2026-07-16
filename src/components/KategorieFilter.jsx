const kategorien = [
  "Alle",
  "JavaScript",
  "DOM",
  "React",
  "API",
  "Routing",
];

function KategorieFilter({ value, onChange }) {
  return (
    <div className="form-field">
      <label htmlFor="category">Kategorie</label>

      <select
        id="category"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {kategorien.map((kategorie) => (
          <option key={kategorie} value={kategorie}>
            {kategorie}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KategorieFilter;
