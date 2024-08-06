import React from "react";
import Links from "./Links"


function About(props) {
   let bioContent;

   if (props.bio && props.bio.trim() !== "") {
     bioContent = <p>{props.bio}</p>;
   }

   return (
     <div id="about">
       <h2>About Me</h2>
       {bioContent}
       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
       <Links />
       {/* add your <Links /> component here */}
     </div>
   );
}

export default About;
