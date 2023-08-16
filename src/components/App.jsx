import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getQuery } from 'api/getQuery';
import { Button } from './Button/Button';
import { Appp, Message } from './App.styled';
import { Loader } from './Loader/Loader';
import { Rings } from 'react-loader-spinner';

export const App = () => {
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState();
  const [onMessage, setOnMessage] = useState(false);
  const perPage = 12;

  useEffect(() => {
    if (query.length) {
      getQuery(query, page, perPage)
        .then(data => {
          setTotalPages(Math.ceil(data.total / perPage));
          setDataArr([...dataArr, ...data.hits]);
          setStatus('resolved');
          setOnMessage(!data.hits.length ? true : false);
          console.log(data);
        })
        .catch(err => {
          setStatus('rejected');
          setError('Something went wrong...');
        });
    }
  }, [query, page, dataArr]);

  const onSubmit = q => {
    if (q !== query) {
      setQuery(q);
      setDataArr([]);
      setPage(1);
    }
  };
  const btnLoadMoreClick = () => {
    setPage(page + 1);
  };
  const btnLoadMoreShow = (totalPages > 1) & (page !== totalPages);

  return (
    <Appp>
      {onMessage && <Message>There is found nothing, try again!</Message>}
      {status === 'pending' && (
        <Loader>
          <Rings />
        </Loader>
      )}
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery dataArr={dataArr} />
      {btnLoadMoreShow ? <Button btnLoadMoreClick={btnLoadMoreClick} /> : null}
      {status === 'rejected' && <h1>{error}</h1>}
    </Appp>
  );
};
