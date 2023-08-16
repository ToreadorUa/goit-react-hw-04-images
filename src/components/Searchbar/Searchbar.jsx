import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [queryValue, setQueryValue] = useState('');

  const handleChange = ({ target }) => {
    setQueryValue(target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(queryValue);
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={queryValue}
        />
      </form>
    </header>
  );
};
