import React from "react";
import cn from "classnames";
import s from "./User.module.css";
import shareIcon from "../images/icon-share.svg";

const User = ({ img, name, date }) => {
  return (
    <div className={cn(s.user)}>
      <img className={cn(s.img)} src={img} alt="User Profile pic" />
      <div>
        <h3 className={cn(s.name)}>{name}</h3>
        <p className={cn(s.date)}>{date}</p>
      </div>
      <button className={cn(s.btn)} type="button">
        <img src={shareIcon} alt="share icon" />
      </button>
    </div>
  );
};

export default User;
