import React, {Component} from 'react';
import { connect } from 'react-redux'

const filterMovies = (state) => {

  if(state.searchTerm != '') {

    return state.movies.filter((movie) => {
      if (movie.title.indexOf(state.searchTerm) > -1) {
        return true;
      }
      else {
        return false;
      }
    });

  }

  else if(state.filterTerm != '') {

    return state.movies.filter((movie) => {
      if (movie.genres.indexOf(state.filterTerm) > -1) {
        return true;
      }
      else {
        return false;
      }
    });

  } else {
    return state.movies;
  }

};

@connect(
  (state) => {
    return {
      movies: filterMovies(state),
    }
  },
  (dispatch) => ({
    getMovies: () => dispatch({
      type: "getMovies",
      request: {
        url: 'https://yts.ag/api/v2/list_movies.json'
      }
    }),
    fav: (id) => dispatch({
      type: "addToFav",
      data: id
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
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-md-4 bloc-movie" key={movie.id}>
              <div className="row">
                <div className="col-md-12">
                  <img src={movie.medium_cover_image} className="img-thumbnail"/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {movie.title}
                </div>
                <div className="col-md-2">
                  <button onClick={() => fav(movie.id)}>Fav</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

List.defaultProps = { movies: []}

export default List;
