import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, article) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon sx={{ fontSize: 10 }} />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{article}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin News</h2>
        <InfoIcon fontSize="medium" />
      </div>
      {newsArticle("Britan PM resigned!!", "Top news -- 10k readers")}
      {newsArticle("Economic crisis in Britan", "Big news -- 9120 readers")}
      {newsArticle(
        "Dollar is Strengthening against Rupee",
        "India news -- 8775 readers"
      )}
      {newsArticle(
        "Will Recession hit India??",
        "Read more here -- 5098 readers"
      )}
      {newsArticle("Covid 19 updates", "Pandemic -- 1399 readers")}
      {newsArticle("Is redux too hard?", "Code -- 800 readers")}
    </div>
  );
}

export default Widgets;
