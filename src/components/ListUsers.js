import React, {Component} from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

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
  counter = this.props.counter

  componentDidMount() {
    this.props.getUsers(this.counter)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.counter !== this.props.counter) {
      this.props.getUsers(nextProps.counter)
    }
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
