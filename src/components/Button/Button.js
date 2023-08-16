import css from './Button.module.css'

export const Button = ({btnLoadMoreClick}) => (
    <button className={css.Button} onClick={btnLoadMoreClick}>Load More...</button>
)   