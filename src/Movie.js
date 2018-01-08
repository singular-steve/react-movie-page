import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';

// class Movie extends Component {
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string
//   }
//   render() {
//     return(
//       <img src={this.props.poster}/>
//     )
//   }
// }

// componets which do not need state could be used by function not class as follows
// render, componentWillMount, componentDidMount do not needed!

function Movie({movie}) {
  return (
    <div className="movie">
      <div className="movie_column">
        <MoviePoster poster={movie.poster} title={movie.title}/>
      </div>
      <div className="movie_column">
        <h1>{movie.title}</h1>
        <p>{movie.genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}</p>
        <p>{movie.rating}</p>
        <div className="movie_summary">
          <LineEllipsis text={movie.summary} maxLine="3" ellipsis="..." basedOn='letters' trimRight />
        </div>
      </div>
    </div>
  )
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  })
}

function MoviePoster({poster, title}) {
  return (
    <img src={poster} className="movie_poster" alt={title}/>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

function MovieGenre({genre}) {
  return (
    <span className="movie_genres">{genre}</span>
  )
}

MovieGenre.propType = {
  genre: PropTypes.string
}

export default Movie;
