import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Charscreen.css";

function ChatsScreen() {
  const [input, setInput] = useState("");
  const [msg, setMsg] = useState([
    {
      name: "Roja",
      pic: "",
      message: "Whats up",
    },
    {
      name: "Roja",
      pic: "",
      message: "Nothing here",
    },
    {
      name: "Roja",
      pic: "",
      message: "haha",
    },
    {
      message: "Hey, Roja",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMsg([...msg, { message: input }]);
    setInput("");
  };
  return (
    <div className="charscreen">
      <h2 className="chatscreen_top">You both have been matched</h2>
      {msg.map((chat, index) =>
        chat.name ? (
          <div className="chatscreen_message">
            <Avatar
              className="chatscreen_image"
              src={chat.pic}
              alt={chat.name}
            />
            <p className="chatscreen_text">{chat.message}</p>
          </div>
        ) : (
          <div className="chatscreen_message">
            <p className="chatscreen_textUser">{chat.message}</p>
          </div>
        )
      )}

      <form className="chatscreen_in">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatscreen_input_text"
          placeholder="type message here"
          type="text"
        />
        <button onClick={handleSend} className="chatscreen_input_btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatsScreen;
