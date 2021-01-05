import React from "react";
import "./Users.scss";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import AddIcon from "@material-ui/icons/Add";
import UserItem from "./UserItem";
const Users = () => {
  const hide = () => {
    document
      .getElementsByClassName("users__container")[0]
      .classList.add("hide");
    document.getElementsByTagName("h2")[0].classList.add("hidden");
    document.getElementsByClassName("IconWrapper")[0].classList.add("hidden");
    document.getElementsByClassName("Con__body")[0].classList.add("hidden");
  };
  return (
    <div className="users__container">
      <div className="header__icons">
        <div className="red__icon"></div>
        <div onClick={() => hide()} className="yellow__icon"></div>
        <div className="green__icon"></div>
      </div>
      <div className="Category">
        <h2>Recent</h2>
        <div className="Cate__Icons">
          <div className="IconWrapper">
            <SearchRoundedIcon />
          </div>
          <div className="IconWrapper">
            <AddIcon />
          </div>
        </div>
      </div>
      {/* Users List here  */}
      <UserItem />
      <UserItem />
      <UserItem />
      <UserItem />
    </div>
  );
};

export default Users;
