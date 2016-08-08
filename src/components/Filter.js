import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'


@connect(
  (state) => ({
    filterTerm: state.filterTerm,
    genres: _.chain(state.movies)
      .map((movie) => {
        return movie.genres;
      })
      .flattenDeep()
      .uniq()
      .value()
  }),
  (dispatch) => ({
    filterAction: (filterTerm) => dispatch({
      type: "filter",
      data: filterTerm
    })
  })
)
class Filter extends Component {

  handleChange = (e) => {
    this.props.filterAction(e.target.value)
  }

  render() {
    const {genres, filterTerm} = this.props
    return (
      <div className="row">
        <div className="col-md-3">
          <select className="form-control" onChange={this.handleChange} defaultValue={filterTerm}>
            <option value="">Choose genre</option>
            {genres.map( (genre) => {
              return <option value={genre} key={genre}>{genre}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}

export default Filter;
