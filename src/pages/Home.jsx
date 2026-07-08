import { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import ReservationModal from '../components/ReservationModal';
import { books, BOOK_STATUS } from '../data/books';
import libraryPhoto from '../assets/biblioteka-sh.webp';
import './Home.css';

const steps = [
  { number: '01', title: 'Zgjidh një libër', text: 'Shfleto katalogun sipas kategorisë ose kërko sipas titullit a autorit.' },
  { number: '02', title: 'Kontrollo disponueshmërinë', text: 'Çdo libër shfaq një status të qartë: i disponueshëm, i rezervuar ose i huazuar.' },
  { number: '03', title: 'Rezervoje', text: 'Kliko "Rezervo Librin" dhe mbaje atë të gatshëm për t’u marrë (vetëm demo).' },
  { number: '04', title: 'Merre në bibliotekë', text: 'Vizito Bibliotekën e Shkodrës për të marrë librin e rezervuar.' },
];

function Home() {
  const [selectedBook, setSelectedBook] = useState(null);

  // Show a handful of available books as "featured" on the home page
  const featuredBooks = books.filter((book) => book.status === BOOK_STATUS.AVAILABLE).slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="hero__slogan">Dija fillon me një faqe.</span>
          <h1 className="hero__title">Lexo n'Shkodër</h1>
          <p className="hero__subtitle">Platforma digjitale e Bibliotekës "Marin Barleti"</p>
          <p className="hero__description">
            Zbuloni, kërkoni dhe rezervoni librat tuaj të preferuar online nga
            Biblioteka Publike "Marin Barleti" në Shkodër.
          </p>
          <div className="hero__actions">
            <Link to="/books" className="btn btn-primary">Shfleto Librat</Link>
            <Link to="/my-card" className="btn btn-secondary">Kartela Ime</Link>
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Proces i thjeshtë</span>
            <h2>Si Funksionon</h2>
            <p>Rezervimi i një libri kërkon vetëm katër hapa të thjeshtë, nga shfletimi deri te marrja e tij.</p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <div className="step-card card" key={step.number}>
                <span className="step-card__number">{step.number}</span>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured books ---------- */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Risi nga rafti</span>
            <h2>Libra të Veçuar</h2>
            <p>Disa tituj që lexuesit tanë i duan më shumë.</p>
          </div>

          <div className="book-grid">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} onReserve={setSelectedBook} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/books" className="btn btn-outline home__browse-all">
              Shiko të Gjithë Librat
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- About Lexo n'Shkodër ---------- */}
      <section className="section about-teaser">
        <div className="container about-teaser__inner">
          <div className="about-teaser__image">
            <img src={libraryPhoto} alt='Biblioteka Publike "Marin Barleti" në Shkodër' />
          </div>
          <div className="about-teaser__content">
            <span className="eyebrow">Rreth Platformës</span>
            <h2>Çfarë është Lexo n'Shkodër?</h2>
            <p>
              Lexo n'Shkodër është platforma digjitale e Bibliotekës "Marin
              Barleti", e krijuar për t'i afruar lexuesit me fondin e pasur
              të bibliotekës dhe për të lehtësuar kërkimin dhe rezervimin e
              librave.
            </p>
            <Link to="/library" className="btn btn-outline">Zbulo Bibliotekën</Link>
          </div>
        </div>
      </section>

      {selectedBook && (
        <ReservationModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </>
  );
}

export default Home;
