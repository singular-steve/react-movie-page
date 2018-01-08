import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // render: componentWillMount() -> render() -> componentDidMount()
  // update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentDidMount() {
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((item) => {
      const movie = {
        _id: item.id,
        title: item.title_english,
        poster: item.medium_cover_image,
        rating: item.rating,
        summary: item.summary,
        genres: item.genres
      }
      return <Movie movie={movie} key={movie._id}/>
    })
    return movies
  }

  render() {
    return (
      <div className={this.state.movies ? "app" : "app-loading"}>
        {this.state.movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  }
}

export default App;
