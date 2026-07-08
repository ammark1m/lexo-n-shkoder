import { useState } from 'react';
import './Contact.css';

const initialFormState = { name: '', email: '', message: '' };

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // No backend here — we simply simulate a successful submission.
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <section className="section contact-page">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Kontakt</span>
          <h2>Na Kontaktoni</h2>
          <p>Keni një pyetje rreth bibliotekës apo një rezervimi? Na dërgoni një mesazh.</p>
        </div>

        <div className="contact-grid">
          {/* ---------- Contact form ---------- */}
          <div className="contact-form-wrap card">
            {isSubmitted && (
              <div className="contact-success" role="status">
                ✅ Faleminderit! Mesazhi juaj u "dërgua" (vetëm demo — asgjë nuk ruhet).
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-form__field">
                <span>Emri</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Emri juaj i plotë"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ju@shembull.com"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span>Mesazhi</span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Si mund t'ju ndihmojmë?"
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className="btn btn-primary btn-block">
                Dërgo Mesazhin
              </button>
            </form>
          </div>

          {/* ---------- Contact info ---------- */}
          <div className="contact-info">
            <div className="contact-info__item card">
              <span aria-hidden="true">📍</span>
              <div>
                <h4>Adresa</h4>
                <p>Rruga 13 Dhjetori, Shkodër 4001, Shqipëri</p>
              </div>
            </div>

            <div className="contact-info__item card">
              <span aria-hidden="true">📞</span>
              <div>
                <h4>Telefoni</h4>
                <p>+355 22 240 000</p>
              </div>
            </div>

            <div className="contact-info__item card">
              <span aria-hidden="true">✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@bibliotekamarinbarleti.al</p>
              </div>
            </div>

            <div className="contact-info__item card">
              <span aria-hidden="true">🕒</span>
              <div>
                <h4>Orari i Punës</h4>
                <p>E Hënë – E Premte: 08:00 – 19:00</p>
                <p>E Shtunë: 09:00 – 14:00 · E Dielë: Mbyllur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
