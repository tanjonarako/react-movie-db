import React, {Component} from 'react';
import { connect } from 'react-redux'

@connect(
  (state) => {
    return {
      users: state.users,
      counter: state.counter
    }
  },
  (dispatch) => ({
    getUsers: (limit) => dispatch({
      type: "getUsers",
      request: {
        url: "https://randomuser.me/api/?results=" + limit
      }
    })
  })
)
class ListUsers extends Component {
  componentDidMount() {
    this.props.getUsers(20)
  }
  render() {
    const users = this.props.users
    return (
      <ul>
        {users.map((user) => {
          return <li key={user.email}>{user.name.first}</li>
        })}
      </ul>
    )
  }
}

ListUsers.defaultProps = { users: []}

export default ListUsers;
