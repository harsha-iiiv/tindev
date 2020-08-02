import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory } from "react-router-dom";

import "./Header.css";

function Header({ backbutton }) {
  const history = useHistory()

  return (
    <div className="Header">
      {backbutton ? (
        <IconButton onClick={() => history.replace(backbutton)}>
          <ArrowBackIcon fontSize="large" className="header_icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header_icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header_logo"
          src="https://i0.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Tinder-Logo.png?fit=506%2C600"
          alt="Tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          {" "}
          <ForumIcon fontSize="large" className="header_icon" />{" "}
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
