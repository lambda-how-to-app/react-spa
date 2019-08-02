import React from "react";
import { Link } from "react-router-dom";

import GuideTitle from "./GuideTitle.js";
import GuideImage from "./GuideImage.js";
import GuideKeywords from "./GuideKeywords.js";
import GuideIngredients from "./GuideIngredients.js";
import GuideStepCard from "./GuideStepCard.js";
import DeleteGuide from "./DeleteGuide";

import "./Card.css";

const Card = ({ guide }) => {
  return guide ? (
    <div className="cardContainer">
      <GuideTitle title={guide.title} />
      <GuideImage src={guide.banner_image} />
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Card;
