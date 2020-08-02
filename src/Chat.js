import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

import "./chat.css";
function Chat({ name, msg, pic, timestamp }) {
  return (
    <Link to={`chat/${name}`}>
      <div className="chat">
        <Avatar className="chat_image" alt={name} src={pic} />
        <div className="chat_details">
          <h2>{name}</h2>
          <p>{msg}</p>
        </div>
        <p className="chat_time">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
