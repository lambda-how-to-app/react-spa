import React, { useState } from "react";
import { Route } from 'react-router-dom';

import { Header } from "semantic-ui-react";
// import GuideTitle from './GuideTitle.js';
// import GuideImage from './GuideImage.js';
// import GuideKeywords from './GuideKeywords.js';
// import GuideIngredients from "./GuideIngredients.js";
// import GuideStepCard from "./GuideStepCard.js";
// import GuideMod from './GuideMod.js';

// import Form from './Form.js';
import Card from './Card.js';
import choco from '../chocomilk.jpg';


export default function Guide() {
  const [guide, setGuide] = useState(
    {
      name: "Make Chocolate Milk",
      img: choco,
      keyword: ["chocolate", "beverage", "dessert"],
      ingredients: ["milk", "chocolate syrup", "spoon", "cup"],
      steps: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    }
  );

  const editGuide = editedGuide => {
    const guideCopy = [...guide];
    const guideIndex = guideCopy.findIndex(guide => guide.name === editedGuide.name);
    guideCopy[guideIndex] = editedGuide;
    setGuide(guideCopy);
  };

  return (
    <div>
      <Header as="h1">How-To</Header>
      {/* <GuideTitle />
      <GuideImage />
      <GuideKeywords />
      <GuideIngredients />
      <GuideStepCard />
      <GuideMod /> */}

      <Card guide={guide} />

      {/* <Route path="/edit/:name"
        render={props => {
          const guides = guide.find(guides => guides.id.toString() === props.match.params.name);
          return <Form {...props}
            initialGuide={guides}
            submitGuide={editGuide}
            buttonText="Edit"
          />;
        }}/> */}

    </div>
  );

}


// const Guide = () => {
//   return ( 
//     <div>
//       <Header as="h1">How-To</Header>
//       <GuideTitle />
//       <GuideImage />
//       <GuideKeywords />
//       <GuideIngredients />
//       <GuideStepCard />
//       <GuideMod />
//     </div> 
//   );
// };

// export default Guide;
