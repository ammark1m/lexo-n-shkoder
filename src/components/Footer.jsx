import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__brand-title">
             Lexo n'Shkodër
          </div>
          <p>
            Platforma digjitale demo e Bibliotekës "Marin Barleti" — një
            projekt portofoli për zbulimin dhe rezervimin e librave. Asnjë
            libër nuk rezervohet realisht.
          </p>
          <p className="footer__slogan">Dija fillon me një faqe.</p>
        </div>

        <div className="footer__col">
          <h4>Eksploro</h4>
          <ul>
            <li><Link to="/">Kryefaqja</Link></li>
            <li><Link to="/books">Librat dhe Kategoritë</Link></li>
            <li><Link to="/library">Biblioteka e Shkodrës</Link></li>
            <li><Link to="/contact">Na Kontaktoni</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Na Vizitoni</h4>
          <ul className="footer__contact">
            <li>Rruga 13 Dhjetori, Shkodër, Shqipëri</li>
            <li>+355 22 240 000</li>
            <li>info@bibliotekamarinbarleti.al</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Lexo n'Shkodër. Projekt portofoli — jo një shërbim real bibliotekar.</p>
      </div>
    </footer>
  );
}

export default Footer;
