import React, {Component} from 'react';
import { connect } from 'react-redux'


@connect(
  (state) => {
    return {
      favourites: state.favourites,
    }
  },
  (dispatch) => ({})
)
class Favourite extends Component {
  render() {
    const favourites = this.props.favourites
    return (
      <ul>
        {favourites.map((favouriteId) => {
          return <li key={favouriteId}>{favouriteId}</li>
        })}
      </ul>
    )
  }
}

export default Favourite;
