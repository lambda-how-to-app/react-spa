import React from 'react';
import { Link } from 'react-router-dom';

import GuideTitle from './GuideTitle.js';
import GuideImage from './GuideImage.js';
import GuideKeywords from './GuideKeywords.js';
import GuideIngredients from "./GuideIngredients.js";
import GuideStepCard from "./GuideStepCard.js";
// import GuideMod from './GuideMod.js';

import "./Card.css";

// { name: "", img: "", keyword: [], ingredients: [], steps: [] };

const Card = (props) => {
    const { guide } = props; // destructuring 
    return(
        <div className="cardContainer">
            <GuideTitle title={guide.name}/>
            <GuideImage src={guide.img} />
            <GuideKeywords keywords={guide.keyword.map(word => word + " ")} />
            <GuideIngredients ingredients={guide.ingredients} />
            <GuideStepCard steps={guide.steps} />
            {/* <GuideMod /> */}
            <Link to={`/edit/${guide.name}`}>Edit</Link>
            {/* { " | "} */}
            {/* <Link to={`/share`}>Share</Link> */}
        </div>
    );
};

export default Card;