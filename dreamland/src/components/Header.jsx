import React from "react";
import headerImage from "../assets/header.jpg";

export const Header = () => {
  return(
    <div className="overflow-hidden">
      <img className="w-full object-contain" src={headerImage} alt="Header" />
    </div>
  )
}
