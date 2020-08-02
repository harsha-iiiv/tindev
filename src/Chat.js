import React from "react";
import Avatar from "@material-ui/core/Avatar";
import './chat.css'
function Chat({ name, msg, pic, timestamp }) {
  return (
    <div className="chat">
      <Avatar className="chat_image" alt={name} src={pic} />
      <div className="chat_details">
        <h2>{name}</h2>
        <p>{msg}</p>
      </div>
      <p className="chat_time">{timestamp}</p>
    </div>
  );
}

export default Chat;
