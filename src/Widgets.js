import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FibreManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("React is new go to ", "Top new - 9099 readers")}
      {newsArticle("cornovirus: india updates", "Top news 0999 readers")}
      {newsArticle("cornovirus: india updates", "Top news 0999 readers")}
      {newsArticle("cornovirus: india updates", "Top news 0999 readers")}
      {newsArticle("cornovirus: india updates", "Top news 0999 readers")}
      {newsArticle("cornovirus: india updates", "Top news 0999 readers")}
    </div>
  );
}

export default Widgets;
