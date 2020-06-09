import React, { Component } from "react";
import User from "./user";
import "./users.css";
import { connect } from "react-redux";
import * as addUserAction from "../actions/addUserAction";

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchString: "",
    };
  }

  fetchUsers = async () => {
    const resp = await fetch(
      "https://gist.githubusercontent.com/swazza/619e53db7be4498b689cba176cab2fbf/raw/03929aa6f594818284604592353c6dd776487b0d/users.json"
    );
    const userRecords = await resp.json();

    userRecords.forEach((user) => {
      this.props.submitUser(user);
    });
  };

  componentDidMount() {
    if (this.props.users.length === 0) {
      this.fetchUsers();
    }

    this.setState({
      isLoading: false,
    });
  }

  usersSearch = (e) => {
    this.setState({
      searchString: e.target.value,
    });
  };

  render() {
    let filteredUsers =
      this.props.users &&
      this.props.users.filter((user) =>
        user.name.toLowerCase().includes(this.state.searchString.toLowerCase())
      );
    let usersList =
      filteredUsers &&
      filteredUsers.map((user) => <User key={user._id} user={user} />);
    return this.state.isLoading ? (
      "loading..."
    ) : (
      <div className="users-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search users here"
            onChange={this.usersSearch}
            value={this.state.searchString}
          />
        </div>

        <table className="users-list">
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Phone no</th>
              <th>User Details</th>
            </tr>
          </thead>
          <tbody>{usersList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      dispatch(addUserAction.addUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
