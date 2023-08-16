import css from './Modal.module.css'

export const Modal = ({ largeImageURL, closeModal }) => (
  <div className={css.Overlay} onClick={closeModal}>
    <div className={css.Modal}>
      <img src={largeImageURL} alt="img" />
    </div>
  </div>
);
