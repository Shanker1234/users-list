import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <tr className="user">
      <td>{props.user.name}</td>
      <td>{props.user.email}</td>
      <td>{props.user.phone}</td>
      <td>
        <Link
          to={{
            pathname: `/user/${props.user._id}`,
            state: { user: props.user },
          }}
        >
          Click here for {props.user.name} details
        </Link>
      </td>
    </tr>
  );
};

export default User;
