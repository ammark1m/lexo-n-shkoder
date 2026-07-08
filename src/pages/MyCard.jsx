import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyCard.css';

// Demo-only data for the library card. There is no login system —
// this page always shows the same fictional member.
const demoUser = {
  name: 'Elira Hoxha',
  cardNumber: 'SHK-2026-04471',
  memberSince: 'Mars 2023',
};

const reservedBooks = [
  { id: 1, title: 'Kështjella', author: 'Ismail Kadare', reservedOn: '2026-07-02', pickUpBy: '2026-07-11', status: 'I rezervuar' },
  { id: 2, title: 'Don Kishoti', author: 'Miguel de Cervantes', reservedOn: '2026-07-05', pickUpBy: '2026-07-14', status: 'I rezervuar' },
];

const borrowedBooks = [
  { id: 3, title: 'Rrethimi i Shkodrës', author: 'Marin Barleti', borrowedOn: '2026-06-10', returnBy: '2026-07-01', status: 'Me vonesë' },
  { id: 4, title: 'Skënderbeu', author: 'Fan Noli', borrowedOn: '2026-06-28', returnBy: '2026-07-19', status: 'I huazuar' },
  { id: 5, title: 'Princi i Vogël', author: 'Antoine de Saint-Exupéry', borrowedOn: '2026-06-30', returnBy: '2026-07-10', status: 'Afat i afërt' },
];

// Maps a status string to the badge style used across the app
function statusBadgeClass(status) {
  if (status === 'I huazuar') return 'badge-available';
  if (status === 'Me vonesë') return 'badge-reserved';
  return 'badge-neutral';
}

function MyCard() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  return (
    <section className="section my-card-page">
      <div className="container">
        <Link to="/" className="my-card-page__back">
          ← Kthehu Mbrapa
        </Link>

        <div className="section-heading">
          <span className="eyebrow">Vetëm demo — nuk nevojitet hyrje</span>
          <h2>Kartela Ime</h2>
          <p>
            Kjo faqe shfaq një profil anëtari shembull, për të parë si do të
            dukej një kartelë bibliotekare, rezervimet dhe librat e huazuar.
          </p>
        </div>

        {/* ---------- Card visual ---------- */}
        <div className="library-card">
          <div className="library-card__top">
            <span className="library-card__brand"> Biblioteka e Shkodrës</span>
            <span className="library-card__chip" aria-hidden="true" />
          </div>
          <div className="library-card__avatar" aria-hidden="true">👤</div>
          <div className="library-card__details">
            <span className="library-card__label">Emri i Anëtarit</span>
            <span className="library-card__name">{demoUser.name}</span>
          </div>
          <div className="library-card__footer">
            <div>
              <span className="library-card__label">Numri i Kartelës</span>
              <span className="library-card__value">{demoUser.cardNumber}</span>
            </div>
            <div>
              <span className="library-card__label">Anëtar Që Prej</span>
              <span className="library-card__value">{demoUser.memberSince}</span>
            </div>
          </div>
        </div>

        <div className="my-card-page__logout">
          <button type="button" className="btn btn-outline" onClick={() => setIsLoggedOut(true)}>
            Dil nga llogaria
          </button>
          {isLoggedOut && (
            <p className="my-card-page__logout-note" role="status">
              Jeni "çkyçur" (demo) — kjo faqe nuk ka një sistem hyrjeje real.
            </p>
          )}
        </div>

        {/* ---------- Reserved books ---------- */}
        <div className="my-card-section">
          <h3>Librat e Rezervuar</h3>
          <div className="my-card-table card">
            <div className="my-card-table__head">
              <span>Titulli</span>
              <span>Rezervuar Më</span>
              <span>Merret Deri Më</span>
              <span>Statusi</span>
            </div>
            {reservedBooks.map((book) => (
              <div className="my-card-table__row" key={book.id}>
                <span className="my-card-table__title">
                  {book.title}
                  <small>{book.author}</small>
                </span>
                <span>{book.reservedOn}</span>
                <span>{book.pickUpBy}</span>
                <span>
                  <span className={`badge ${statusBadgeClass(book.status)}`}>{book.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Borrowed books ---------- */}
        <div className="my-card-section">
          <h3>Librat e Huazuar</h3>
          <div className="my-card-table card">
            <div className="my-card-table__head">
              <span>Titulli</span>
              <span>Huazuar Më</span>
              <span>Kthehet Deri Më</span>
              <span>Statusi</span>
            </div>
            {borrowedBooks.map((book) => (
              <div className="my-card-table__row" key={book.id}>
                <span className="my-card-table__title">
                  {book.title}
                  <small>{book.author}</small>
                </span>
                <span>{book.borrowedOn}</span>
                <span>{book.returnBy}</span>
                <span>
                  <span className={`badge ${statusBadgeClass(book.status)}`}>{book.status}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCard;
