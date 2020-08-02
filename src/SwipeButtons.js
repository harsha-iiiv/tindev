import React from "react";
import ReplyIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StartRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import IconButton from "@material-ui/core/IconButton";

import "./SwipeButtons.css";
function SwipeButtons() {
  return (
    <div>
      <div className="SwipeButtons">
        <IconButton className="swipe_btn_repeat">
          {" "}
          <ReplyIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipe_btn_left">
          {" "}
          <CloseIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipe_btn_star">
          {" "}
          <StartRateIcon fontSize="large" />
        </IconButton>
        <IconButton className="swipe_btn_right">
          {" "}
          <FavoriteIcon fontSize="large" />
        </IconButton>

        <IconButton className="swipe_btn_flash">
          <FlashOnIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButtons;
