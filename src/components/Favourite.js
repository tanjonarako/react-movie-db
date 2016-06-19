import React, {Component} from 'react';
import { connect } from 'react-redux'


@connect(
  (state) => {
    return {
      favourites: state.favourites,
    }
  },
  (dispatch) => ({
    getFav: () => dispatch({
      type: "getFav"
    })
  })
)
class Favourite extends Component {
  componentDidMount() {
    this.props.getFav()
  }
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
