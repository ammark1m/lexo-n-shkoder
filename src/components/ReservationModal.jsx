import { useEffect } from 'react';
import './ReservationModal.css';

// Modal shown after clicking "Reserve" on a book.
// This project has no backend, so it only simulates a reservation
// and is clear with the user that nothing is actually booked.
function ReservationModal({ book, onClose }) {
  // Allow closing the modal with the Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!book) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal__close" onClick={onClose} aria-label="Mbyll">
          ✕
        </button>

        <div className="modal__icon">✅</div>
        <h3 id="modal-title">Rezervimi u konfirmua (demo)</h3>
        <p className="modal__text">
          <strong>{book.title}</strong> nga {book.author} u "rezervua" për ju.
        </p>
        <p className="modal__note">
          Ky është një demo portofoli — nuk ka backend real, kështu që asnjë
          rezervim nuk kryhet në të vërtetë dhe asnjë e dhënë nuk ruhet apo
          dërgohet askund.
        </p>

        <button type="button" className="btn btn-primary btn-block" onClick={onClose}>
          E kuptova
        </button>
      </div>
    </div>
  );
}

export default ReservationModal;
