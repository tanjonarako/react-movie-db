import React, {Component} from 'react';
import { connect } from 'react-redux'


@connect(
  (state) => ({}),
  (dispatch) => ({
    searchAction: (searchTerm) => dispatch({
      type: "search",
      data: searchTerm
    })
  })
)
class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchAction(this.myInput.value)
  }
  render() {
    const movies = this.props.movies
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"  ref={ (input) => { this.myInput = input } } />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default Search;
