import { useState } from 'react';
import { getCategoryById } from '../data/categories';
import { BOOK_STATUS } from '../data/books';
import './BookCard.css';

// Builds a small inline SVG cover (data URI) so the card still shows
// something clean if the remote placeholder image ever fails to load.
function buildFallbackCover(title, gradient) {
  const [start, end] = gradient ?? ['#1f3a5f', '#2f5a8f'];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="${start}" />
          <stop offset="1" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="400" height="600" fill="url(#g)" />
      <text x="200" y="300" fill="#f8f4ec" font-family="Georgia, serif" font-size="28"
        font-weight="700" text-anchor="middle" dominant-baseline="middle">${title}</text>
    </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const STAR_VALUES = [1, 2, 3, 4, 5];

// Displays a single book: a 2:3 cover, its details, a star rating, a
// status badge and a "Reserve" button.
function BookCard({ book, onReserve }) {
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const category = getCategoryById(book.category);
  const isAvailable = book.status === BOOK_STATUS.AVAILABLE;
  const hasRated = userRating > 0;

  return (
    <article className="book-card card">
      <div className="book-card__cover">
        <img
          src={book.image}
          alt={`Kapaku i librit ${book.title}`}
          className="book-card__cover-img"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = buildFallbackCover(book.title, category?.gradient);
          }}
        />
      </div>

      <div className="book-card__body">
        <div className="book-card__top-row">
          <span className="badge badge-neutral book-card__category">
            {category?.name ?? 'Pa kategori'}
          </span>

          <span className="book-card__rating" title={`Vlerësimi mesatar: ${book.rating} nga 5`}>
            <span className="book-card__star" aria-hidden="true">★</span>
            {book.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>

        <div className="book-card__rate-row">
          <span className="badge badge-neutral book-card__rating-count">
            {book.ratingCount} vlerësime
          </span>

          {hasRated ? (
            <span className="book-card__rate-done">
              <span aria-hidden="true">✓</span> Faleminderit!
            </span>
          ) : (
            <div
              className="book-card__star-picker"
              role="radiogroup"
              aria-label="Vlerëso këtë libër nga 1 deri në 5 yje"
              onMouseLeave={() => setHoverRating(0)}
            >
              {STAR_VALUES.map((value) => (
                <button
                  key={value}
                  type="button"
                  role="radio"
                  aria-checked={userRating === value}
                  aria-label={`${value} yje`}
                  className="book-card__star-btn"
                  onMouseEnter={() => setHoverRating(value)}
                  onFocus={() => setHoverRating(value)}
                  onBlur={() => setHoverRating(0)}
                  onClick={() => setUserRating(value)}
                >
                  {value <= hoverRating ? '★' : '☆'}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="book-card__footer">
          <span className={`badge ${isAvailable ? 'badge-available' : 'badge-reserved'}`}>
            {book.status}
          </span>

          <button
            type="button"
            className="btn btn-outline book-card__reserve"
            disabled={!isAvailable}
            onClick={() => onReserve(book)}
          >
            {isAvailable ? 'Rezervo Librin' : book.status}
          </button>
        </div>
      </div>
    </article>
  );
}

export default BookCard;
