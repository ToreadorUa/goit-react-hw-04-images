import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { getQuery } from 'api/getQuery';
import { Button } from './Button/Button';
import { Appp, Message } from './App.styled';
import { Loader } from './Loader/Loader';
import { Rings } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    totalPages: 0,
    dataArr: [],
    page: 1,
    per_page: 12,
    status: 'idle',
    error: '',
    onMessage: false,
  };
  componentDidUpdate(_, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ page: 1, dataArr: [] });
    }
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.setState({ status: 'pending' });
      getQuery(this.state.query, this.state.page, this.state.per_page)
        .then(data => {
          this.setState(prev => ({
            totalPages: Math.ceil(data.total / this.state.per_page),
            dataArr: [...prev.dataArr, ...data.hits],
            status: 'resolved',
            onMessage: !data.hits.length ? true : false,
          }));
        })
        .catch(err => {
          this.setState({
            status: 'rejected',
            error: 'Something went wrong...',
          });
          console.log(err);
        });
    }
  }
  onSubmit = q => {
    this.setState({ query: q });
  };
  btnLoadMoreClick = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  render() {
    const { totalPages, page, dataArr } = this.state;
    const btnLoadMoreShow = (totalPages > 1) & (page !== totalPages);
    return (
      <Appp>
        {this.state.onMessage && (
          <Message>There is found nothing, try again!</Message>
        )}
        {this.state.status === 'pending' && (
          <Loader>
            <Rings />
          </Loader>
        )}
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery dataArr={dataArr} />
        {btnLoadMoreShow ? (
          <Button btnLoadMoreClick={this.btnLoadMoreClick} />
        ) : null}
        {this.state.status === 'rejected' && <h1>{this.state.error}</h1>}
      </Appp>
    );
  }
}
