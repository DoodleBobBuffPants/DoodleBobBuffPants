import React from "react";
import skeleton from "./GIFs/skeleton.gif";
import sun from "./GIFs/sun.gif";
import christmas from "./GIFs/christmas.gif";
import "./index.scss";

const Theme = () => {
  const theme = getTheme();
  const gif = theme === "christmas" ? christmas : theme === "summer" ? sun : skeleton;
  return (
    <div className="theme">
      <img src={gif} width="200" height="300" alt="" />
    </div>
  );
};

const getTheme = () => {
  const currentMonth = new Date().getMonth() + 1;
  return currentMonth === 12 ? "christmas" : currentMonth > 5 && currentMonth < 9 ? "summer" : "halloween";
};

export { Theme, getTheme };
