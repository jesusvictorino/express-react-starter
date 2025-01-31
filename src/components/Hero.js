import React from "react";

const Hero = (props) => {
  return (
    <li>
      <button className="delete-button">Delete</button>
      <div className="hero-element">
        <div className="badge">{props.hero.id}</div>
        <div className="name">{props.hero.name}</div>
        <div className="sayong">{props.hero.sayong}</div>
      </div>
    </li>
  );
};

export default Hero;
