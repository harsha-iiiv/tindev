import React from "react";
import Chat from "./Chat";
function Chats() {
  return (
    <div>
      <Chat
        className="chat_"
        name="Roja"
        pic=" "
        msg="Yo whats up!!"
        timestamp="10 seconds ago"
      />
      <Chat
        name="Sara"
        pic=" "
        msg="Yo whats up!!"
        timestamp="10 seconds ago"
      />
      <Chat
        name="Kaira"
        pic=" "
        msg="Yo whats up!!"
        timestamp="10 seconds ago"
      />
      <Chat
        name="Aswini"
        pic=" "
        msg="Yo whats up!!"
        timestamp="10 seconds ago"
      />
    </div>
  );
}

export default Chats;
