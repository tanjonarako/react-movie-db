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
    return (
      <div className="row">
        <div className="col-md-8">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input id="inputSearch" className="form-control" type="text" placeholder="Search" ref={ (input) => { this.myInput = input } } />
            </div>
            <button type="submit" className="btn btn-default"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;
