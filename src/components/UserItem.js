import { Avatar } from "@material-ui/core";
import React from "react";
import "./UsersList.scss";
const UserItem = () => {
  return (
    <div className="UserCard">
      <Avatar />
      <div className="Con__info">
        <h3>UserName</h3>
        <div className="Con__body">
          <p>Last Message ...</p>
          <p>8 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
