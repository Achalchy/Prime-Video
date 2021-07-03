import React from "react";
import "./Row.css";
import GradeIcon from "@material-ui/icons/Grade";

const Row = ({ title, description, poster, votes, rating, date }) => {
  return (
    <div className="row">
      <div className="rowLeft">
        <img id="posterImg" src={poster} alt="" />
      </div>
      <div className="rowRight">
        <h1 className="title">{title}</h1>
        <h3 className="rates">
          <GradeIcon id="Grade" />
          {rating}
        </h3>
        <p className="desc">
          <span>Description:</span>
          {description}
        </p>
        <h5 className="votes">
          <span>Votes:</span>
          {votes}
        </h5>
        <h5 className="date">
          <span>Release-Date: </span>
          {date}
        </h5>
      </div>
    </div>
  );
};

export default Row;
