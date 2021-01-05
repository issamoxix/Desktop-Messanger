import React from "react";
import "./App.scss";
import Chat from "./components/Chat";
import Users from "./components/Users";

function App() {
  return (
    <div className="Messenger">
      <Users />
      <Chat />
    </div>
  );
}

export default App;
