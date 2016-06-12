import React, {Component} from 'react';
import { connect } from 'react-redux'


@connect(
  (state) => {
    return {
      movies: state.movies.filter((movie) => {
        if (movie.title.indexOf(state.searchTerm) > -1)
        return true;
        else return false;
      } ),
    }
  },
  (dispatch) => ({
    getMovies: () => dispatch({
      type: "getMovies",
      request: {
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=61a7fe0a2defc2d41f21253258bf6a4e'
      }
    })
  })
)
class List extends Component {
  componentDidMount() {
    this.props.getMovies()
  }
  render() {
    const movies = this.props.movies
    return (
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul>
    )
  }
}

List.defaultProps = { movies: []}

export default List;
