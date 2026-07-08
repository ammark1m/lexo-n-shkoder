import { useMemo, useState } from 'react';
import BookCard from '../components/BookCard';
import CategoryCard from '../components/CategoryCard';
import SearchBar from '../components/SearchBar';
import ReservationModal from '../components/ReservationModal';
import { books } from '../data/books';
import { categories } from '../data/categories';
import './BooksCategories.css';

function BooksCategories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null); // null = all categories
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return books.filter((book) => {
      const matchesCategory = !activeCategory || book.category === activeCategory;
      const matchesQuery =
        !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchTerm, activeCategory]);

  return (
    <section className="section books-page">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Katalogu</span>
          <h2>Librat dhe Kategoritë</h2>
          <p>Kërko në katalog ose filtro sipas kategorisë për të gjetur librin tënd të radhës.</p>
        </div>

        <div className="books-page__controls">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />

          <div className="books-page__categories">
            <CategoryCard category={null} isActive={activeCategory === null} onSelect={setActiveCategory} />
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onSelect={setActiveCategory}
              />
            ))}
          </div>
        </div>

        <p className="books-page__count">
          Duke shfaqur {filteredBooks.length} nga {books.length} libra
        </p>

        {filteredBooks.length > 0 ? (
          <div className="book-grid">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} onReserve={setSelectedBook} />
            ))}
          </div>
        ) : (
          <div className="books-page__empty card">
            <span aria-hidden="true">📭</span>
            <h3>Nuk u gjet asnjë libër</h3>
            <p>Provo një term kërkimi ose kategori tjetër.</p>
          </div>
        )}
      </div>

      {selectedBook && (
        <ReservationModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </section>
  );
}

export default BooksCategories;
