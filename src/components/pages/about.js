import React from "react";
import profilePicture from "../../../static/assets/images/bio/maddie-6.jpg"

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
      className="left-column" 
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      ></div>
      <div className="right-column">
      Madison is a down to earth yogi who has a passion for building beautiful, user-friendly websites. Currently she is working on freelance projects with various wellness studios in New York. She has the capabilities to build the website you’ve always dreamed of from the ground up or from a template, such as Squarespace or Wix.

      She received her certificate of competency from Bottega and is well versed in HTML5, CSS, SCSS/SASS, Javascript, ReactJS, Python 3, UML, Flask, JSON, SQL Databases, Flexbox, CSS Grid and React Hooks. 

      Madison is an adaptive and intuitive soul that can be trusted to take your brand, product or service to the next level. Reach out today to work with her.
      </div>
    </div>
  );
}


