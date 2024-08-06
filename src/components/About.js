import React from "react";
import user from "../data/user";
import Links from "./Links"


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.trim() !== "" && <p>{props.bio}</p>}
      {/* <p>{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
