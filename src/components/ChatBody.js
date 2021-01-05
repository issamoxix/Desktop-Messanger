import React from "react";
import "./ChatBody.scss";
import Message from "./Message";
import MyMessage from "./MyMessage";
const ChatBody = () => {
  return (
    <div className="ChatBody">
      <Message />
      <MyMessage />
    </div>
  );
};

export default ChatBody;
