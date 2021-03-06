import React from "react";
import "./style.css";

const Card = props => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-lg-4 img-container">
          <a href={props.url} target="_blank" rel="noopener noreferrer"><img src={props.image} alt={props.name} className="project-img"></img></a>
        </div>
        <div className="col-lg-8 project-info">
          <p className="title">{props.title}</p>
          <p>Link: <a href={props.url} target="_blank" rel="noopener noreferrer">{props.url}</a></p>
          <p>Source Code: <a href={props.github_url}target="_blank" rel="noopener noreferrer">{props.github_url}</a></p>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Card;