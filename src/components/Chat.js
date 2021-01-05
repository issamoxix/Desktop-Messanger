import React from "react";
import "./Chat.scss";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import SendForm from "./SendForm";
const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatBody />
      <SendForm />
    </div>
  );
};

export default Chat;
