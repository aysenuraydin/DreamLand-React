import React from "react";
import headerImage from "../assets/deneme10.png";

export const Header = () => {
  return(
    <div className="overflow-hidden my-20 rounded-2xl">
      <img className="w-full object-contain" src={headerImage} alt="Header" />
    </div>
  )
}
