import React from "react";
import InsertEmoticonRoundedIcon from "@material-ui/icons/InsertEmoticonRounded";
import ImageRoundedIcon from "@material-ui/icons/ImageRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
const SendForm = () => {
  return (
    <form className="InputForm">
      <input type="text" className="Sendinput" placeholder="Your message..." />
      <div className="FormIcons">
        <InsertEmoticonRoundedIcon fontSize="normale" />
        <ImageRoundedIcon fontSize="normale" />
        <SendRoundedIcon fontSize="normale" />
      </div>
    </form>
  );
};

export default SendForm;
