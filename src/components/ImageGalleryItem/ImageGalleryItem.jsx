import { Modal } from 'components/Modal/Modal';
import { useState, useEffect } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', onClickEsc);
    return () => {
      window.removeEventListener('keydown', onClickEsc);
    };
  }, []);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const onClickEsc = e => {
    if (e.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <li className={css.ImageGalleryItem} onClick={openModal}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={'img'}
        />
      </li>
      {isModalOpen && (
        <Modal largeImageURL={largeImageURL} closeModal={openModal} />
      )}
    </>
  );
};
