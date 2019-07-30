import React from "react";
import { Header, List } from "semantic-ui-react";

const GuideIngredients = () => {
  return ( 
    <div>
      <Header as="h3" textAlign='center'>What's Needed</Header>
      <List bulleted>
      {/* to be replaced with back end data */}
        <List.Item>milk</List.Item>
        <List.Item>chocolate syrup</List.Item>
        <List.Item>spoon</List.Item>
        <List.Item>cup</List.Item>
      </List>
    </div> 
  );
};

export default GuideIngredients;
