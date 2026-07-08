import './CategoryCard.css';

// A clickable chip used to filter the book list by category.
// `isActive` highlights the currently selected category.
function CategoryCard({ category, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`category-card ${isActive ? 'is-active' : ''}`}
      onClick={() => onSelect(category?.id ?? null)}
    >
      {category ? category.name : 'Të Gjitha Kategoritë'}
    </button>
  );
}

export default CategoryCard;
