import React from "react";
import { Card } from "semantic-ui-react";

const GuideCard = ({ guide }) => {
  console.log(guide);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{guide.title}</Card.Header>
        <Card.Meta>{guide.created_at}</Card.Meta>
        <Card.Description>Guide description goes here</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default GuideCard;
