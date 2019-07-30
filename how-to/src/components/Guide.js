import React from "react";
import { Header } from "semantic-ui-react";
import GuideTitle from './GuideTitle.js';
import GuideImage from './GuideImage.js';
import GuideKeywords from './GuideKeywords.js';
import GuideIngredients from "./GuideIngredients.js";
import GuideStepCard from "./GuideStepCard.js";
import GuideMod from './GuideMod.js';

const Guide = () => {
  return ( 
    <div>
      <Header as="h1">How-To</Header>
      <GuideTitle />
      <GuideImage />
      <GuideKeywords />
      <GuideIngredients />
      <GuideStepCard />
      <GuideMod />
    </div> 
  );
};

export default Guide;
