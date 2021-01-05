import { Avatar } from "@material-ui/core";
import React from "react";
import "./chatHeader.scss";
import CallRoundedIcon from "@material-ui/icons/CallRounded";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
const ChatHeader = () => {
  return (
    <div className="chatHeader">
      <div className="UserInfo">
        <Avatar />
        <div className="UserBody">
          <h3>UserName</h3>
          <p>Online 8 min ago</p>
        </div>
      </div>
      <div className="HeaderIcons">
        <div className="HeaderIconWrapper">
          <CallRoundedIcon fontSize="large" />
        </div>
        <div className="HeaderIconWrapper">
          <VideocamRoundedIcon fontSize="large" />
        </div>
        <div className="HeaderIconWrapper">
          <MoreHorizRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
