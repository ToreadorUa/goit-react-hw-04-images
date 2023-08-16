import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ dataArr }) => (
  <ul className={css.ImageGallery}>
    {dataArr.map(({ id, webformatURL, largeImageURL }) => (
      <React.Fragment key={id}>
        <ImageGalleryItem
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      </React.Fragment>
    ))}
  </ul>
);
