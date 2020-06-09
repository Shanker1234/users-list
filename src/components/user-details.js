import React from "react";
import "./users.css";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  const user = props.location.state.user;

  return (
    <div className="user-details">
      <Link to="/users-list">Back to users</Link>
      <h1>{user.name}</h1>
      <p>
        <strong>About: </strong> {user.about}
      </p>
      <p>Contact: {user.phone}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default UserDetails;
