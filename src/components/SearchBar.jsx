import './SearchBar.css';

// Controlled search input for filtering books by title or author.
function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <span className="search-bar__icon" aria-hidden="true">🔍</span>
      <input
        type="text"
        className="search-bar__input"
        placeholder="Kërko sipas titullit ose autorit..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Kërko librat sipas titullit ose autorit"
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          onClick={() => onChange('')}
          aria-label="Pastro kërkimin"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;
