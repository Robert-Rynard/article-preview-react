import React, { useState } from "react";

import ShareIcon from "./ShareIcon";
import cn from "classnames";
import fbIcon from "../images/icon-facebook.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import s from "./User.module.css";
import twitterIcon from "../images/icon-twitter.svg";

const User = ({ img, name, date }) => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked((clicked) => !clicked);
  };

  return (
    <div className={cn(s.user)}>
      <img className={cn(s.img)} src={img} alt="User Profile pic" />
      <div>
        <h3 className={cn(s.name)}>{name}</h3>
        <p className={cn(s.date)}>{date}</p>
      </div>
      <div className={cn(s.wrapper, { [s.clicked]: clicked })}>
        <p>Share</p>
        <span className={cn(s.icons)}>
          <img src={fbIcon} alt="facebook icon" />
          <img src={twitterIcon} alt="twitter icon" />
          <img src={pinterestIcon} alt="pinterest icon" />
        </span>
      </div>
      <button
        className={cn(s.btn, { [s.active]: clicked })}
        onClick={clickHandler}
        type="button"
      >
        <ShareIcon clicked={clicked} />
      </button>
    </div>
  );
};

export default User;
